# Contratos de API — linksss.space

Preencher à medida que os endpoints forem sendo implementados. Serve como referência para o frontend e para testes.

## Convenções
- Base URL: `NEXT_PUBLIC_API_BASE_URL` (ex: `http://localhost:3001/api/v1`)
- Autenticação: cookie `sso-souzs_access_token` (httpOnly, signed)
- Todos os endpoints protegidos retornam `401` sem autenticação válida
- Endpoints públicos marcados com `[PUBLIC]`

---

## Perfis públicos

```
GET  /profiles/:slug              [PUBLIC] — retorna dados públicos do perfil
POST /profiles/:slug/view         [PUBLIC] — registra pageview (analytics)
POST /profiles/:slug/click/:blockId [PUBLIC] — registra clique em bloco
```

---

## Gestão de perfis (autenticado)

```
GET    /pages                     — lista perfis do usuário logado
POST   /pages                     — cria novo perfil
GET    /pages/:id                 — detalhes de um perfil
PATCH  /pages/:id                 — atualiza perfil
DELETE /pages/:id                 — remove perfil
PATCH  /pages/:id/activate        — ativa perfil
PATCH  /pages/:id/deactivate      — desativa perfil
```

---

## Blocos / Links

```
GET    /pages/:pageId/links       — lista blocos do perfil
POST   /pages/:pageId/links       — cria bloco
PATCH  /pages/:pageId/links/:id   — atualiza bloco
DELETE /pages/:pageId/links/:id   — remove bloco
PATCH  /pages/:pageId/links/reorder — reordena blocos (body: [{ id, position }])
```

---

## Analytics

```
GET /analytics/pages/:pageId/overview   — KPIs do período
GET /analytics/pages/:pageId/clicks     — cliques por bloco
GET /analytics/pages/:pageId/devices    — breakdown por dispositivo
GET /analytics/pages/:pageId/countries  — breakdown por país
GET /analytics/pages/:pageId/referrers  — breakdown por referrer
GET /analytics/pages/:pageId/utm        — performance por UTM
GET /analytics/pages/:pageId/heatmap    — dados para heatmap (hora × dia)
GET /analytics/pages/:pageId/export     — export CSV (BUSINESS)

Query params: ?from=2024-01-01&to=2024-01-31&pageId=xxx
```

---

## Billing

```
GET  /billing/subscription         — assinatura atual
POST /billing/checkout             — cria Stripe Checkout Session
POST /billing/portal               — cria Stripe Customer Portal Session
GET  /billing/invoices             — lista faturas (via Stripe)
POST /billing/coupon/validate      — valida cupom
POST /webhooks/stripe              [PUBLIC] — webhook Stripe
```

---

## Admin

```
GET    /admin/dashboard            — KPIs globais
GET    /admin/users                — lista usuários (paginado)
GET    /admin/users/:id            — detalhes do usuário
PATCH  /admin/users/:id/plan       — altera plano manualmente
PATCH  /admin/users/:id/suspend    — suspende conta
PATCH  /admin/users/:id/reactivate — reativa conta
POST   /admin/users/:id/grant      — concede acesso premium manual

GET    /admin/coupons              — lista cupons
POST   /admin/coupons              — cria cupom
PATCH  /admin/coupons/:id         — edita cupom
DELETE /admin/coupons/:id         — remove cupom

GET    /admin/revenue              — dados de receita (MRR, ARR, churn)
GET    /admin/analytics            — analytics agregado da plataforma
```

---

## Auth (via SSO — não implementado no app)

```
Toda autenticação é delegada ao Souzs SSO.
Ver .claude/integrations/sso-docs.md
```