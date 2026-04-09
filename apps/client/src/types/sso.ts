/**
 * SSO User Payload — Souzs SSO v1
 */

export interface UserPayload {
  ssoId: string
  email: string
  displayName?: string
  role: 'ADMIN' | 'USER'
  avatarUrl?: string
  iat?: number
  exp?: number
}