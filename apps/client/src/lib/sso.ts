/**
 * SSO Integration — Souzs SSO v1 (Next.js standalone)
 * Docs: .claude/integrations/sso-docs.md
 *
 * Verificação de sessão via GET /auth/me.
 * Sem JWT local, sem Redis, sem JWKS — apenas forward de cookie para o SSO.
 */

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { UserPayload } from '@/types/sso'

const COOKIE_PREFIX = process.env.COOKIE_NAME_PREFIX ?? 'sso-souzs'
const SSO_API_URL = (process.env.SSO_API_URL ?? process.env.NEXT_PUBLIC_SSO_API_URL)!
const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL!
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_BASE_URL)!
const ADMIN_URL = `${APP_URL}/admin`

async function getCookieHeader(): Promise<string> {
  const cookieStore = await cookies()
  return cookieStore.getAll().map((c) => `${c.name}=${c.value}`).join('; ')
}

/**
 * Decodifica o payload do access token sem validar a assinatura.
 * Uso: exibição de dados do usuário (sidebar, header). Rápido — sem rede.
 * Segurança: o middleware já validou o cookie. Não usar para checar permissões.
 *
 * Formato do cookie assinado (express cookie-parser):
 *   s:{jwt_header}.{jwt_payload}.{jwt_sig}.{hmac_sha256}
 * O HMAC nunca contém ponto, portanto o último '.' separa JWT do HMAC.
 */
export async function getSessionFromCookie(): Promise<UserPayload | null> {
  try {
    const cookieStore = await cookies()
    const raw = cookieStore.get(`${COOKIE_PREFIX}_access_token`)?.value
    if (!raw) return null

    const unsigned = raw.startsWith('s:') ? raw.slice(2) : raw
    const lastDot = unsigned.lastIndexOf('.')
    const jwt = lastDot > 0 ? unsigned.slice(0, lastDot) : unsigned

    const parts = jwt.split('.')
    if (parts.length !== 3) return null

    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf-8')) as UserPayload
    // Always resolve avatar from SSO files endpoint
    payload.avatarUrl = `${SSO_API_URL}/files/avatars/${payload.ssoId}-${payload.role.toLowerCase()}.jpg`
    return payload
  } catch {
    return null
  }
}

/**
 * Retorna o usuário autenticado ou null via /auth/me.
 * Usar quando precisar garantir que a sessão ainda é válida no SSO.
 */
export async function getSession(): Promise<UserPayload | null> {
  try {
    const res = await fetch(`${SSO_API_URL}/auth/me`, {
      headers: { Cookie: await getCookieHeader() },
      cache: 'no-store',
    })
    if (!res.ok) return null
    return (await res.json()) as UserPayload
  } catch {
    return null
  }
}

/**
 * Exige autenticação ADMIN. Redireciona se não autenticado ou sem permissão.
 * Usar em Server Components de páginas protegidas.
 * @param redirectUri - Para onde redirecionar após login (default: /admin)
 */
export async function requireAdmin(redirectUri = ADMIN_URL): Promise<UserPayload> {
  const user = await getSession()

  if (!user) {
    redirect(`${SSO_URL}?redirect_uri=${encodeURIComponent(redirectUri)}`)
  }

  if (user.role !== 'ADMIN') {
    redirect('/not-found') // não revelar que o admin existe
  }

  return user
}

/**
 * Exige autenticação (qualquer usuário). Redireciona se não autenticado.
 * Usar em Server Components de páginas protegidas da plataforma.
 * @param redirectUri - Para onde redirecionar após login
 */
export async function requireAuth(redirectUri = APP_URL): Promise<UserPayload> {
  const user = await getSession()

  if (!user) {
    redirect(`${SSO_URL}?redirect_uri=${encodeURIComponent(redirectUri)}`)
  }

  return user
}

/**
 * Exige autenticação ADMIN para API routes.
 * Retorna 401/403 em JSON em vez de redirecionar.
 */
export async function requireAdminApi(): Promise<UserPayload> {
  const user = await getSession()

  if (!user) {
    throw new Error('Unauthorized')
  }

  if (user.role !== 'ADMIN') {
    throw new Error('Forbidden')
  }

  return user
}

/**
 * Chama POST /auth/logout no SSO para invalidar os cookies.
 * Usar via Route Handler — ver /api/auth/logout/route.ts
 */
export async function performLogout(): Promise<void> {
  try {
    await fetch(`${SSO_API_URL}/auth/logout`, {
      method: 'POST',
      headers: { Cookie: await getCookieHeader() },
      cache: 'no-store',
    })
  } catch {
    // silent — cookies expiram naturalmente pelo SSO
  }
}

export function getSsoLoginUrl(redirectUri = ADMIN_URL): string {
  return `${SSO_URL}?redirect_uri=${encodeURIComponent(redirectUri)}`
}