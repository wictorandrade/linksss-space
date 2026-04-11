# Decisões de Desenvolvimento

Registro de decisões arquiteturais e técnicas tomadas durante o projeto.
Preencher à medida que decisões forem sendo tomadas.

## Formato
```
### [DATA] Título da decisão
**Contexto:** por que a decisão foi necessária
**Decisão:** o que foi decidido
**Consequências:** o que isso implica
```

---

### [2026-04-10] Estrutura inicial do projeto

**Contexto:** Projeto iniciado como monorepo NX com dois apps.
**Decisão:** `apps/api` = NestJS, `apps/client` = Next.js App Router.
**Consequências:** Código compartilhado vai em `libs/` quando necessário. Blacklist de slugs precisa existir nos dois apps — manter sincronizado.

---

### [2026-04-10] Autenticação via Souzs SSO

**Contexto:** A Souzs tem SSO centralizado para todos os apps do ecossistema.
**Decisão:** Não implementar auth próprio. Usar Souzs SSO com cookies httpOnly, RS256 e JWKS.
**Consequências:** Precisa de Redis no API para cache de chaves públicas. Usuário é criado localmente no primeiro login com `ssoId` como chave estrangeira.

---

### [2026-04-10] Schema Prisma já definido

**Contexto:** Schema já existe com modelos para User, Page, Link, Analytics, Plans, etc.
**Decisão:** Usar o schema existente como base e evoluir com migrations.
**Consequências:** Modelo `Link` é genérico — pode ser usado para todos os tipos de bloco via campo `type` (enum `LinkType`). Se precisar de dados específicos por tipo, usar o campo `style` (Json) temporariamente até criar tabela dedicada.

---

### [2026-04-10] planSource para concessão manual

**Contexto:** Admin precisa conceder planos premium sem criar assinatura no Stripe.
**Decisão:** Modelo `UserGrant` já existe. Adicionar campo `planSource: FREE | STRIPE | ADMIN` para distinguir origem do plano.
**Consequências:** A verificação de acesso a features deve checar `UserGrant` (ADMIN) antes de checar `Subscription` (STRIPE).

---

<!-- Adicionar novas decisões acima desta linha -->