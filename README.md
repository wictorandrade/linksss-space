# Linksss Space

> Clone premium do Linktree feito por [Souzs](https://souzs.com)

## Quick Start

```bash
# 1. Copiar arquivos de ambiente
cp apps/api/.env.example apps/api/.env
cp apps/client/.env.example apps/client/.env
cp .env.example .env

# 2. Editar .env com suas credenciais (Stripe, etc)
# apps/api/.env - STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
# apps/client/.env - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

# 3. Instalar dependências
npm install

# 4. Subir infraestrutura (postgres, redis, minio)
npm run docker:infra

# 5. Configurar banco de dados
cd apps/api
npx prisma generate
npx prisma migrate dev
npx tsx prisma/seed.ts
cd ../..

# 6. Rodar em desenvolvimento
npm run dev
```

## URLs

| Serviço | URL |
|---------|-----|
| **Client** | http://localhost:3002 |
| **API** | http://localhost:5002 |
| **API Docs** | http://localhost:5002/docs |
| **MinIO UI** | http://localhost:9011 |

## Docker Compose

```bash
# Subir apenas infra (postgres, redis, minio)
npm run docker:infra

# Subir tudo (infra + api + client)
npm run docker:up

# Derrubar tudo
npm run docker:down

# Rebuild
npm run docker:build
```

## Estrutura de Pastas

```
apps/
├── api/           # NestJS Backend (porta 5002)
│   ├── src/
│   │   ├── core/        # Auth, Prisma, User
│   │   └── modules/     # Pages, Links, Plans, etc
│   ├── prisma/          # Schema + Seed
│   └── .env
│
└── client/        # Next.js Frontend (porta 3002)
    ├── src/
    │   ├── app/
    │   │   ├── (comercial)/   # Landing pages (/pricing, /templates)
    │   │   ├── (plataform)/   # Dashboard do usuário
    │   │   ├── (admin)/       # Painel admin
    │   │   └── [slug]/        # Páginas públicas
    │   ├── components/
    │   ├── hooks/
    │   └── lib/
    ├── public/
    └── .env
```

## Route Groups

| Grupo | Rotas | Descrição |
|-------|-------|-----------|
| `(comercial)` | `/`, `/pricing`, `/templates`, `/features` | Landing comercial |
| `(plataform)` | `/dashboard`, `/dashboard/pages`, `/dashboard/analytics` | App do usuário |
| `(admin)` | `/admin/plans`, `/admin/coupons`, `/admin/users` | Painel admin |
| `[slug]` | `/seu-slug` | Página pública |

## Variáveis de Ambiente

### API (`apps/api/.env`)

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL` | Connection string PostgreSQL |
| `REDIS_HOST/PORT` | Conexão Redis |
| `SSO_API_URL` | URL do SSO API |
| `STRIPE_SECRET_KEY` | Chave secreta Stripe |
| `STRIPE_WEBHOOK_SECRET` | Segredo do webhook Stripe |
| `AWS_S3_ENDPOINT` | Endpoint MinIO/S3 |

### Client (`apps/client/.env`)

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_API_URL` | URL da API |
| `NEXT_PUBLIC_SSO_URL` | URL do SSO frontend |
| `NEXT_PUBLIC_SSO_API_URL` | URL do SSO API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Chave pública Stripe |

## Features

- ✅ SSO Integration (souzs-sso)
- ✅ Pages com slug único
- ✅ Links com drag-and-drop
- ✅ 5 Templates premium artísticos
- ✅ Analytics completo
- ✅ Stripe subscriptions (BRL)
- ✅ Cupons de desconto
- ✅ Grants de acesso gratuito
- ✅ Admin dashboard completo
- ✅ CI/CD GitHub Actions

## Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS 4, TanStack Query
- **Backend:** NestJS 11, Prisma 7
- **Database:** PostgreSQL 17
- **Cache:** Redis Stack
- **Storage:** MinIO (S3)
- **Payments:** Stripe BR
- **Deploy:** Docker + GitHub Actions

## Stripe Setup

1. Criar conta em [dashboard.stripe.com](https://dashboard.stripe.com)
2. Configurar Brasil como país
3. Obter chaves de teste em Developers > API Keys
4. Criar produtos/preços em Products
5. Configurar webhook em Developers > Webhooks
6. Atualizar `.env` com as chaves

---

Made with ❤️ by [Souzs](https://souzs.com)