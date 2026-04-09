"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const prisma_module_1 = require("./core/prisma/prisma.module");
const auth_module_1 = require("./core/auth/auth.module");
const jwt_auth_guard_1 = require("./core/auth/guards/jwt-auth.guard");
const user_module_1 = require("./core/user/user.module");
const pages_module_1 = require("./modules/pages/pages.module");
const links_module_1 = require("./modules/links/links.module");
const plans_module_1 = require("./modules/plans/plans.module");
const subscriptions_module_1 = require("./modules/subscriptions/subscriptions.module");
const coupons_module_1 = require("./modules/coupons/coupons.module");
const templates_module_1 = require("./modules/templates/templates.module");
const analytics_module_1 = require("./modules/analytics/analytics.module");
const content_module_1 = require("./modules/content/content.module");
const admin_module_1 = require("./modules/admin/admin.module");
const app_config_1 = tslib_1.__importDefault(require("./config/app.config"));
const env_validation_1 = require("./config/env.validation");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            // Config
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default],
                isGlobal: true,
                validationSchema: env_validation_1.envValidation,
                expandVariables: true,
            }),
            // Rate limiting
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            // Core modules
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            // Feature modules
            pages_module_1.PagesModule,
            links_module_1.LinksModule,
            plans_module_1.PlansModule,
            subscriptions_module_1.SubscriptionsModule,
            coupons_module_1.CouponsModule,
            templates_module_1.TemplatesModule,
            analytics_module_1.AnalyticsModule,
            content_module_1.ContentModule,
            admin_module_1.AdminModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.SsoAuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map