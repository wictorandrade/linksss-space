# Status das Features

Atualizar à medida que o desenvolvimento avança.

## Legenda
- `[ ]` — não iniciado
- `[~]` — em andamento
- `[x]` — concluído
- `[!]` — bloqueado / problema

---

## Infraestrutura

- `[~]` Monorepo NX configurado (api + client)
- `[ ]` Docker compose para desenvolvimento local
- `[ ]` CI/CD pipeline
- `[ ]` Prisma migrations iniciais rodando
- `[ ]` Seed de dados de desenvolvimento
- `[ ]` Variáveis de ambiente documentadas e configuradas

---

## Autenticação (Souzs SSO)

- `[~]` Documentação SSO em `.claude/integrations/sso-docs.md`
- `[ ]` Middleware Next.js com refresh automático
- `[ ]` SSOAuthGuard no NestJS
- `[ ]` PublicKeyHelper + Redis cache de JWKS
- `[ ]` Decoradores `@IsPublic()` e `@CurrentUser()`
- `[ ]` Criação automática de User local no primeiro login

---

## Perfis públicos

- `[ ]` Rota `[slug]` funcionando
- `[ ]` Blacklist de slugs validada
- `[ ]` Tracking de pageview
- `[ ]` SEO (title, meta, OG tags)
- `[ ]` ISR configurado

---

## Sistema de blocos

- `[ ]` CRUD de blocos
- `[ ]` Drag and drop para reordenar
- `[ ]` Tracking de clique por bloco
- `[ ]` Bloco BUTTON
- `[ ]` Bloco BUTTON_WHATSAPP
- `[ ]` Bloco VIDEO
- `[ ]` Bloco IMAGE
- `[ ]` Bloco FORM_LEAD
- `[ ]` Bloco PRODUCT
- `[ ]` Bloco COUPON
- `[ ]` Bloco DOWNLOAD_PDF
- `[ ]` Bloco CALENDAR
- `[ ]` Bloco HTML (BUSINESS)

---

## Templates

- `[ ]` Template creator (FREE)
- `[ ]` Template business (PRO)
- `[ ]` Template ecommerce (PRO)
- `[ ]` Template minimal-dark (PRO)
- `[ ]` Template glassmorphism (BUSINESS)
- `[ ]` Preview ao vivo na tela de appearance

---

## Área autenticada

- `[ ]` /app/dashboard com KPIs
- `[ ]` /app/profile — edição do perfil
- `[ ]` /app/links — gestão de blocos
- `[ ]` /app/appearance — templates e cores
- `[ ]` /app/analytics — gráficos
- `[ ]` /app/billing — plano e assinatura
- `[ ]` /app/settings — slug, domínio, pixels

---

## Analytics

- `[ ]` Coleta de pageview
- `[ ]` Coleta de clique por bloco
- `[ ]` Queries agregadas por período
- `[ ]` Gráfico de linha (views + cliques)
- `[ ]` Breakdown por dispositivo
- `[ ]` Breakdown por país
- `[ ]` Breakdown por referrer
- `[ ]` Performance UTM
- `[ ]` Heatmap hora × dia
- `[ ]` Export CSV

---

## Billing (Stripe)

- `[ ]` Stripe configurado
- `[ ]` Checkout Session
- `[ ]` Customer Portal
- `[ ]` Webhook handler
- `[ ]` Sincronização de status de assinatura
- `[ ]` Validação de cupom no checkout
- `[ ]` /app/billing/invoices
- `[ ]` /app/billing/payment-method

---

## Painel Admin

- `[ ]` Rota /admin protegida por role
- `[ ]` Dashboard com KPIs globais
- `[ ]` Listagem de usuários
- `[ ]` Busca e filtros de usuários
- `[ ]` Alterar plano manualmente
- `[ ]` Suspender / reativar conta
- `[ ]` Conceder premium manual (30d, 1 ano, vitalício)
- `[ ]` CRUD de cupons
- `[ ]` Dashboard de revenue (MRR, ARR, churn)

---

## Extras

- `[ ]` QR code do perfil
- `[ ]` Domínio customizado
- `[ ]` Pixel tracking (Meta, Google, TikTok)
- `[ ]` Export CSV de analytics
- `[ ]` Múltiplos perfis (BUSINESS)
- `[ ]` IA — sugestões de otimização
- `[ ]` Marketing site (landing, pricing, templates)