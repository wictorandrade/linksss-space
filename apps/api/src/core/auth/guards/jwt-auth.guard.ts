import { Injectable, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator'
import { IS_ADMIN_KEY } from '../decorators/admin-only.decorator'
import { AuthService } from '../auth.service'
import { Request } from 'express'

// Extend Request type
declare module 'express' {
  interface Request {
    user?: any
    ssoPayload?: any
  }
}

@Injectable()
export class SsoAuthGuard {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) {
      return true
    }

    const isAdmin = this.reflector.getAllAndOverride<boolean>(IS_ADMIN_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    const request = context.switchToHttp().getRequest<Request>()

    try {
      const payload = isAdmin
        ? await this.authService.validateAdminSession(request)
        : await this.authService.validateSession(request)

      const user = await this.authService.getOrCreateUser(payload)
      request.user = user
      request.ssoPayload = payload
      return true
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error
      }
      throw new UnauthorizedException('Authentication required')
    }
  }
}

// Legacy alias for backwards compatibility
export { SsoAuthGuard as JwtAuthGuard }