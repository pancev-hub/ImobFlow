# Instruções rápidas para rodar localmente (desenvolvimento)

Siga estes passos para ter o ambiente de desenvolvimento funcionando:

1. Instale Node.js >= 18 e Yarn >= 3

2. Instale dependências (na raiz do monorepo):

```bash
yarn install
```

3. Configure variáveis de ambiente

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/web/.env.example apps/web/.env
cp apps/mobile/.env.example apps/mobile/.env
```

- Observação para mobile: em emuladores Android, use `http://10.0.2.2:3000` para conectar ao host. Se usar Tunnel do Expo, `http://localhost:3000` funciona.

4. Inicie o banco de dados Postgres com Docker Compose:

```bash
docker-compose up -d
```

5. Prisma (backend):

```bash
# Gere o client
yarn workspace @imobflow/backend prisma:generate

# Execute migração de desenvolvimento (criar tabela User definida no schema)
yarn workspace @imobflow/backend db:migrate

# (opcional) Rode o seed para popular dados iniciais
yarn workspace @imobflow/backend prisma:seed
```

6. Inicie os serviços em desenvolvimento (em terminais separados):

```bash
# Backend (API)
yarn workspace @imobflow/backend dev

# Web (Frontend)
yarn workspace @imobflow/web dev

# Mobile (Expo)
cd apps/mobile
yarn install
yarn dev
```

7. Gerar APK (opções):

Opção A — EAS Build (recomendado, requer conta Expo):

1. Instale EAS CLI: `npm install -g eas-cli`
2. No diretório apps/mobile, configure `eas.json` conforme docs do Expo.
3. Execute: `eas build --platform android --profile preview` (irá gerar APK/AAB na nuvem).

Opção B — Build local (requer Android SDK instalado)

1. No apps/mobile, rode `expo prebuild` para gerar arquivos nativos (diretório android/).
2. Abra o projeto Android no Android Studio e gere o APK via Build > Generate Signed Bundle / APK.

8. Acesse:

- Backend: http://localhost:3000/health
- Web: normalmente http://localhost:5173 (ou porta exibida pelo Vite)

Observações:
- O scaffold criado é mínimo para permitir desenvolvimento local e iterativo.
- Se quiser que eu crie Dockerfile de produção, workflow de build com testes, ou configure EAS.json para builds automáticos, eu posso adicionar.
