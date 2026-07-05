# ImobFlow 🏢

> Sistema profissional para imobiliárias

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![React Native](https://img.shields.io/badge/React%20Native-Expo-000020?style=flat-square&logo=react)](https://expo.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 📋 Visão Geral

ImobFlow é um sistema profissional desenvolvido para uso interno de imobiliárias,trabalhando em conjunto com seu CRM. A aplicação é composta por:

- 📱 **Mobile**: Aplicativo React Native otimizado para corretores
- 🖥️ **Web**: Dashboard administrativo em React
- ⚙️ **Backend**: API REST com Node.js e Express
- 📦 **Monorepo**: Estrutura escalável com shared packages

## 🏗️ Arquitetura

```
/imobflow
├── /apps
│   ├── /mobile       # React Native + Expo
│   ├── /backend      # Node.js + Express
│   └── /web          # React + Vite
├── /packages
│   ├── /ui           # Componentes reutilizáveis
│   ├── /types        # Tipos TypeScript compartilhados
│   └── /utils        # Utilitários compartilhados
└── /docs             # Documentação
```

## 🛠️ Stack Tecnológico

### Mobile
- React Native com Expo
- Expo Router (navegação)
- TypeScript
- NativeWind (Tailwind para Native)
- React Query (gerenciamento de dados)
- Zustand (estado global)
- SQLite (offline first)
- Axios (HTTP client)

### Backend
- Node.js 18+
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Multer (upload de arquivos)
- Swagger (documentação)
- Docker & Docker Compose

### Web
- React 18+
- Vite
- TypeScript
- Tailwind CSS
- React Query
- Axios

## 📦 Instalação

### Pré-requisitos

- Node.js >= 18.0.0
- Yarn >= 3.0.0
- PostgreSQL 14+
- Docker & Docker Compose (opcional)

### Setup Inicial

1. **Clone o repositório**
```bash
git clone https://github.com/pancev-hub/imobflow.git
cd imobflow
```

2. **Instale dependências**
```bash
yarn install
```

3. **Configure variáveis de ambiente**
```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/mobile/.env.example apps/mobile/.env
cp apps/web/.env.example apps/web/.env
```

4. **Configure o banco de dados**
```bash
# Com Docker Compose
docker-compose up -d

# Ou com PostgreSQL local
# Configure a CONNECTION_URL no arquivo .env
```

5. **Execute migrações do Prisma**
```bash
yarn db:migrate
```

6. **Inicie os serviços em desenvolvimento**
```bash
# Terminal 1 - Backend
yarn backend:dev

# Terminal 2 - Mobile
yarn mobile:dev

# Terminal 3 - Web
yarn web:dev
```

## 🚀 Scripts Disponíveis

### Root

```bash
# Desenvolvimento de todos os apps
yarn dev

# Build de todos os apps
yarn build

# Lint em todos os workspaces
yarn lint

# Type checking
yarn type-check

# Testes
yarn test
```

### Mobile

```bash
yarn mobile:dev       # Inicia desenvolvimento
yarn mobile:build     # Build para produção
```

### Backend

```bash
yarn backend:dev      # Inicia servidor de desenvolvimento
yarn backend:build    # Build para produção
yarn db:migrate       # Executa migrações do Prisma
yarn db:seed          # Seed do banco de dados
yarn db:studio        # Abre Prisma Studio
```

### Web

```bash
yarn web:dev         # Inicia desenvolvimento
yarn web:build       # Build para produção
```

## 📱 Fluxo Principal - Mobile

```
Login
  ↓
Dashboard
  ↓
Clientes
  ↓
Imóveis
  ↓
Agenda
  ↓
Visitas
  ↓
Resumo
  ↓
Sincronização
```

## 👥 Perfis de Usuário

- **Administrador**: Acesso total ao sistema
- **Gerente**: Gerenciamento de corretores e imóveis
- **Corretor**: Acesso a clientes, imóveis, agenda e visitas

## 📋 Módulos

- **Login**: Autenticação JWT
- **Dashboard**: Visão geral de atividades
- **Clientes**: Gestão de clientes
- **Leads**: Funil de vendas
- **Imóveis**: Catálogo de propriedades
- **Agenda**: Calendário de atividades
- **Visitas**: Registro de visitas
- **Fotos**: Galeria de imagens
- **Documentos**: Gerenciamento de arquivos
- **Relatórios**: Análises e métricas
- **Configurações**: Preferências de usuário

## 🎨 Design System

Tema padrão:
- **Primário**: Azul (#0066FF)
- **Secundário**: Verde (#00CC66)
- **Neutro**: Branco e variações de cinza

Componentes reutilizáveis:
- Button
- Input
- Card
- Avatar
- Badge
- Modal
- Header
- BottomNavigation
- FloatingButton
- Theme

## 🔐 Segurança

- JWT Authentication com Refresh Token
- Validação de entrada em todas as rotas
- Proteção CORS configurada
- Rate limiting
- Sanitização de dados
- Hashing de senhas com bcrypt

## 📡 Funcionalidades

### Sincronização Offline

O app mobile funciona completamente offline com SQLite local e sincronização automática quando conectado.

### Upload de Mídia

Suporte para upload de:
- Fotos de imóveis
- Documentos
- Avatares de usuários

### Integração Kenlo Imob

Integração read-only com Kenlo Imob, sem modificações no CRM.

## 🐳 Docker

### Executar com Docker Compose

```bash
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down
```

### Estrutura do Docker Compose

- PostgreSQL 14
- Backend Node.js
- Volumes persistentes

## 📚 Documentação

Documentação completa em `/docs`

### API Swagger

Quando o backend estiver rodando, acesse:
```
http://localhost:3000/api/docs
```

## 🧪 Testes

```bash
# Executar testes em todos os workspaces
yarn test

# Testes específicos
yarn workspace @imobflow/backend test
yarn workspace @imobflow/mobile test
yarn workspace @imobflow/web test
```

## 🔄 CI/CD

GitHub Actions configurado para:
- Linting
- Type checking
- Testes
- Build automatizado

## 📝 Clean Architecture

Todo o código segue princípios de Clean Architecture:

```
/src
├── /controllers   # Endpoints HTTP
├── /services      # Lógica de negócio
├── /repositories  # Acesso a dados
├── /entities      # Modelos de domínio
├── /dtos          # Data Transfer Objects
├── /routes        # Definição de rotas
├── /middlewares   # Middlewares Express
└── /utils         # Utilitários
```

## 🤖 Preparado para IA

Estrutura pronta para integração futura com:
- Análise de dados com IA
- Recomendações automáticas
- Processamento de linguagem natural

## 💾 Banco de Dados

Modelos Prisma:

- **User**: Usuários do sistema
- **Client**: Clientes
- **Lead**: Leads de vendas
- **Property**: Imóveis
- **Visit**: Registro de visitas
- **Task**: Tarefas/Agenda
- **Photo**: Fotos
- **Document**: Documentos
- **Notification**: Notificações
- **AuditLog**: Log de auditoria

## 📞 Suporte

Para dúvidas ou problemas:

- 📧 Email: fred.pancev@gmail.com
- 🐛 Issues: (11)944511667

## 📄 Licença

MIT

## 👨‍💻 Autor

By FSM Softwares

---

**ImobFlow** - Transformando a gestão de imobiliárias 🚀
