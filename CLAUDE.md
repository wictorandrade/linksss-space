<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# linksss.space — Contexto do Projeto

## O que é
SaaS de bio pages / landing pages pessoais e comerciais, inspirado no Linktree mas mais avançado. Foco em customização visual, analytics, monetização e gestão administrativa.

## Stack
- **Monorepo NX** com dois apps: `apps/api` (NestJS) e `apps/client` (Next.js App Router)
- **TypeScript** em todo o projeto
- **Tailwind CSS + Shadcn UI** no client
- **Prisma + PostgreSQL** no api
- **Stripe** para billing
- **Souzs SSO** para autenticação (ver `.claude/integrations/sso-docs.md`)

## Arquitetura de Rotas (Next.js)
- `(comercial)` — marketing site público (landing, pricing, blog)
- `(plataform)` — área autenticada do usuário (`/app/**`)
- `(admin)` — painel administrativo (`/admin/**`)
- `[slug]` — perfis públicos (`/wictor`, `/empresa-x`)

## Autenticação
Usa o SSO centralizado da Souzs. **Não implementar auth próprio.** Ver `.claude/integrations/sso-docs.md` para implementação completa. A autenticação já existe parcialmente mas não está funcional.

## Schema do banco
O schema Prisma já existe em `apps/api/prisma/schema.prisma` com modelos para: User, Page, Link, Content, ContentPurchase, PageAnalytics, LinkClick, Plan, Subscription, Coupon, UserGrant, Template, PlatformSettings.

## Requirements
Ver `.claude/requirements/` para todos os requisitos funcionais detalhados por área.

## Harness de desenvolvimento
Ver `.claude/harness/` para arquivos de configuração, variáveis de ambiente e contratos de API que serão preenchidos durante o desenvolvimento.

**OBRIGAÇÃO:** Ao iniciar cada nova sessão, verificar o conteúdo do harness para entender:
- Status atual das features (`feature-status.md`)
- Decisões técnicas já tomadas (`dev-decisions.md`)
- Contratos de API (`api-contracts.md`)
- Variáveis de ambiente necessárias (`env.api.md`, `env.client.md`)

---

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax


<!-- nx configuration end-->