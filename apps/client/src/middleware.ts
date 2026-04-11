import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_PREFIX = process.env.COOKIE_NAME_PREFIX ?? 'sso-souzs'
const SSO_API_URL = process.env.NEXT_PUBLIC_SSO_API_URL ?? ''
const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL ?? ''

function extractJwtFromSignedCookie(raw: string): string | null {
  const unsigned = raw.startsWith('s:') ? raw.slice(2) : raw
  const lastDot = unsigned.lastIndexOf('.')
  return lastDot > 0 ? unsigned.slice(0, lastDot) : unsigned
}

function decodeJwtPayload(jwt: string): Record<string, unknown> | null {
  try {
    const parts = jwt.split('.')
    if (parts.length !== 3) return null
    const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(atob(b64))
  } catch {
    return null
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const accessCookieName = `${COOKIE_PREFIX}_access_token`
  const refreshCookieName = `${COOKIE_PREFIX}_refresh_token`

  const hasRefresh = req.cookies.has(refreshCookieName)
  const hasAccess = req.cookies.has(accessCookieName)

  const ssoLoginUrl = `${SSO_URL}?redirect_uri=${encodeURIComponent(req.url)}`

  if (!hasRefresh) {
    return NextResponse.redirect(ssoLoginUrl)
  }

  if (!hasAccess) {
    try {
      const refreshRes = await fetch(`${SSO_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { Cookie: req.headers.get('cookie') ?? '' },
        cache: 'no-store',
      })

      if (refreshRes.ok) {
        const response = NextResponse.next()
        refreshRes.headers.getSetCookie().forEach((cookie) => {
          response.headers.append('Set-Cookie', cookie)
        })
        return response
      }
    } catch {
      // refresh falhou — força novo login
    }

    return NextResponse.redirect(ssoLoginUrl)
  }

  if (pathname.startsWith('/admin')) {
    const raw = req.cookies.get(accessCookieName)?.value
    if (raw) {
      const jwt = extractJwtFromSignedCookie(raw)
      const payload = jwt ? decodeJwtPayload(jwt) : null
      const role = payload?.role as string | undefined

      if (role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}