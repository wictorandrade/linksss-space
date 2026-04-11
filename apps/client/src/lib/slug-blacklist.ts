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
  'features',
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

  // Plataforma
  'billing',
  'settings',
  'dashboard',
  'profile',
  'account',
  'pages',
  'analytics',
  'appearance',
  'links',

  // Infra / sistema
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
  'demo',

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

export const SLUG_REGEX = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/
export const SLUG_MIN = 3
export const SLUG_MAX = 30

export function isSlugReserved(slug: string): boolean {
  return RESERVED_SLUGS.has(slug.toLowerCase())
}

export function validateSlug(slug: string): string | null {
  if (slug.length < SLUG_MIN) return `Mínimo ${SLUG_MIN} caracteres`
  if (slug.length > SLUG_MAX) return `Máximo ${SLUG_MAX} caracteres`
  if (!SLUG_REGEX.test(slug)) return 'Use apenas letras minúsculas, números e hífens'
  if (isSlugReserved(slug)) return 'Este slug está reservado e não pode ser usado'
  return null
}