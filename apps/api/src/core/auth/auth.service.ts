import { Injectable, UnauthorizedException, ForbiddenException, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request } from 'express'
import { PrismaService } from '../prisma/prisma.service'
import { SsoPayload } from './auth.interface'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)
  private readonly ssoApiUrl: string
  private readonly cookiePrefix: string

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.ssoApiUrl = this.configService.getOrThrow('SSO_API_URL')
    this.cookiePrefix = this.configService.get<string>('COOKIE_NAME_PREFIX', 'linksss')
  }

  /**
   * Forward cookies to SSO's /auth/me endpoint to validate session.
   * Returns the user payload from SSO.
   */
  async validateSession(request: Request): Promise<SsoPayload> {
    const cookieHeader = this.getCookieHeader(request)

    if (!cookieHeader) {
      throw new UnauthorizedException('No cookies provided')
    }

    try {
      const res = await fetch(`${this.ssoApiUrl}/auth/me`, {
        headers: { Cookie: cookieHeader },
        cache: 'no-store',
      })

      if (!res.ok) {
        if (res.status === 401) {
          throw new UnauthorizedException('Session expired or invalid')
        }
        throw new UnauthorizedException('SSO validation failed')
      }

      return (await res.json()) as SsoPayload
    } catch (error) {
      this.logger.error(`SSO validation error: ${error}`)
      throw new UnauthorizedException('Could not validate session with SSO')
    }
  }

  /**
   * Validate session and require ADMIN role.
   */
  async validateAdminSession(request: Request): Promise<SsoPayload> {
    const payload = await this.validateSession(request)

    if (payload.role !== 'ADMIN') {
      throw new ForbiddenException('Admin access required')
    }

    return payload
  }

  /**
   * Get cookie header from request.
   */
  private getCookieHeader(request: Request): string | null {
    const cookies = request.cookies as Record<string, string> | undefined
    if (!cookies) {
      // Try to get from headers
      const cookieHeader = request.headers.cookie
      return cookieHeader || null
    }

    return Object.entries(cookies)
      .map(([name, value]) => `${name}=${value}`)
      .join('; ')
  }

  /**
   * Get or create user from SSO payload.
   */
  async getOrCreateUser(payload: SsoPayload) {
    let user = await this.prisma.user.findUnique({
      where: { ssoId: payload.ssoId },
    })

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          ssoId: payload.ssoId,
          email: payload.email,
          name: payload.displayName || payload.email.split('@')[0],
          avatarUrl: payload.avatarUrl,
        },
      })
      this.logger.log(`Created new user: ${user.email}`)
    } else {
      // Update user info if changed
      if (payload.displayName && user.name !== payload.displayName) {
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: {
            name: payload.displayName,
            avatarUrl: payload.avatarUrl,
          },
        })
      }
    }

    return user
  }

  /**
   * Check if user has an active subscription or grant for a feature.
   */
  async checkFeatureAccess(userId: string, feature: string): Promise<boolean> {
    const subscription = await this.prisma.subscription.findFirst({
      where: {
        userId,
        status: 'ACTIVE',
      },
      include: { plan: true },
    })

    if (subscription?.plan) {
      const planFeatures = {
        customThemes: subscription.plan.customThemes,
        paidContent: subscription.plan.paidContent,
        customDomain: subscription.plan.customDomain,
        removeWatermark: subscription.plan.removeWatermark,
        prioritySupport: subscription.plan.prioritySupport,
      }
      return planFeatures[feature as keyof typeof planFeatures] || false
    }

    // Check grants
    const grant = await this.prisma.userGrant.findFirst({
      where: {
        userId,
        expiresAt: { gt: new Date() },
      },
      include: { plan: true },
    })

    if (grant?.plan) {
      const planFeatures = {
        customThemes: grant.plan.customThemes,
        paidContent: grant.plan.paidContent,
        customDomain: grant.plan.customDomain,
        removeWatermark: grant.plan.removeWatermark,
        prioritySupport: grant.plan.prioritySupport,
      }
      return planFeatures[feature as keyof typeof planFeatures] || false
    }

    return false
  }
}