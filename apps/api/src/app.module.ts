import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'
import { CommonModule } from './common/common.module'
import { PrismaModule } from './core/prisma/prisma.module'
import { AuthModule } from './core/auth/auth.module'
import { SsoAuthGuard } from './core/auth/guards/jwt-auth.guard'
import { UserModule } from './core/user/user.module'
import { StorageModule } from './core/storage/storage.module'
import { PagesModule } from './modules/pages/pages.module'
import { LinksModule } from './modules/links/links.module'
import { PlansModule } from './modules/plans/plans.module'
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module'
import { CouponsModule } from './modules/coupons/coupons.module'
import { TemplatesModule } from './modules/templates/templates.module'
import { AnalyticsModule } from './modules/analytics/analytics.module'
import { ContentModule } from './modules/content/content.module'
import { AdminModule } from './modules/admin/admin.module'
import configuration from './config/app.config'
import { envValidation } from './config/env.validation'

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: envValidation,
      expandVariables: true,
    }),

    // Rate limiting
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),

    // Core modules
    CommonModule,
    PrismaModule,
    AuthModule,
    UserModule,
    StorageModule,

    // Feature modules
    PagesModule,
    LinksModule,
    PlansModule,
    SubscriptionsModule,
    CouponsModule,
    TemplatesModule,
    AnalyticsModule,
    ContentModule,
    AdminModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: SsoAuthGuard,
    },
  ],
})
export class AppModule {}