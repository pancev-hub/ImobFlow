# Instruções rápidas para rodar localmente (desenvolvimento)

Siga estes passos para ter o ambiente de desenvolvimento funcionando:

1. Instale Node.js >= 18 e Yarn >= 3

2. Instale dependências (na raiz do monorepo):

```bash
yarn install
```

3. Configure variáveis de ambiente:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/web/.env.example apps/web/.env  # opcional
```

4. Inicie o banco de dados Postgres com Docker Compose:

```bash
docker-compose up -d
```

5. Geração do client do Prisma e migração (backend):

```bash
# Gere o client
yarn workspace @imobflow/backend prisma:generate

# Execute migração de desenvolvimento (criar tabela User definida no schema)
yarn workspace @imobflow/backend db:migrate
```

6. Inicie os serviços em desenvolvimento:

```bash
# Backend (API)
yarn workspace @imobflow/backend dev

# Web (Frontend)
yarn workspace @imobflow/web dev
```

7. Acesse:

- Backend: http://localhost:3000/health
- Web: normalmente http://localhost:5173 (ou porta exibida pelo Vite)

Observações:
- O scaffold criado é mínimo para permitir desenvolvimento local e iterativo.
- Se quiser que eu adicione mobile, Dockerfile para backend, seeds Prisma ou CI, me avise.
