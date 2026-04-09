/**
 * SSO Integration — Souzs SSO v1 (NestJS)
 * Auth via cookie forwarding to SSO /auth/me endpoint.
 */

export interface SsoPayload {
  ssoId: string
  email: string
  displayName?: string
  firstName?: string
  lastName?: string
  avatarUrl?: string | null
  role: 'ADMIN' | 'USER'
  iat?: number
  exp?: number
}