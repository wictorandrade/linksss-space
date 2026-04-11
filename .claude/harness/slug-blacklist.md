# Blacklist de Slugs Reservados

Slugs que não podem ser registrados por usuários. Validar no backend (API) e no frontend (ao digitar o slug).

## Lista completa

```typescript
// apps/api/src/common/constants/slug-blacklist.ts
// apps/client/src/lib/slug-blacklist.ts (mesma lista — manter sincronizado)

export const RESERVED_SLUGS = new Set([
  // Rotas da aplicação
  'app',
  'admin',
  'api',
  'auth',
  'callback',

  // Marketing / público
  'pricing',
  'templates',
  'blog',
  'support',
  'about',
  'contact',
  'terms',
  'privacy',
  'changelog',
  'roadmap',

  // Auth / conta
  'login',
  'logout',
  'signup',
  'register',
  'forgot-password',
  'reset-password',
  'verify',
  'invite',

  // Infra / sistema
  'billing',
  'settings',
  'dashboard',
  'profile',
  'account',
  'webhook',
  'webhooks',
  'health',
  'metrics',
  'status',
  'static',
  'assets',
  'public',
  'robots',
  'sitemap',
  'favicon',
  '_next',

  // Reservados para o negócio
  'linksss',
  'linksssspace',
  'souzs',
  'official',
  'team',
  'staff',
  'help',
  'security',
  'legal',
  'press',
  'media',
  'partner',
  'partners',
  'affiliate',
  'affiliates',
])

export function isSlugReserved(slug: string): boolean {
  return RESERVED_SLUGS.has(slug.toLowerCase())
}
```

## Regras de validação do slug

```
- Mínimo 3 caracteres
- Máximo 30 caracteres
- Apenas letras, números e hífens
- Não pode começar ou terminar com hífen
- Não pode ter hífens consecutivos (--)
- Não pode ser reservado (lista acima)
- Deve ser único no banco
```

## Regex de validação

```typescript
export const SLUG_REGEX = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/
export const SLUG_MIN = 3
export const SLUG_MAX = 30
```