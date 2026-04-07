import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SsoAuthGuard } from './guards/jwt-auth.guard'

@Module({
  providers: [AuthService, SsoAuthGuard],
  exports: [AuthService, SsoAuthGuard],
})
export class AuthModule {}