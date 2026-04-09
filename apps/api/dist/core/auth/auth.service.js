"use strict";
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(configService, prisma) {
        this.configService = configService;
        this.prisma = prisma;
        this.logger = new common_1.Logger(AuthService_1.name);
        this.ssoApiUrl = this.configService.getOrThrow('SSO_API_URL');
        this.cookiePrefix = this.configService.get('COOKIE_NAME_PREFIX', 'linksss');
    }
    /**
     * Forward cookies to SSO's /auth/me endpoint to validate session.
     * Returns the user payload from SSO.
     */
    async validateSession(request) {
        const cookieHeader = this.getCookieHeader(request);
        if (!cookieHeader) {
            throw new common_1.UnauthorizedException('No cookies provided');
        }
        try {
            const res = await fetch(`${this.ssoApiUrl}/auth/me`, {
                headers: { Cookie: cookieHeader },
                cache: 'no-store',
            });
            if (!res.ok) {
                if (res.status === 401) {
                    throw new common_1.UnauthorizedException('Session expired or invalid');
                }
                throw new common_1.UnauthorizedException('SSO validation failed');
            }
            return (await res.json());
        }
        catch (error) {
            this.logger.error(`SSO validation error: ${error}`);
            throw new common_1.UnauthorizedException('Could not validate session with SSO');
        }
    }
    /**
     * Validate session and require ADMIN role.
     */
    async validateAdminSession(request) {
        const payload = await this.validateSession(request);
        if (payload.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('Admin access required');
        }
        return payload;
    }
    /**
     * Get cookie header from request.
     */
    getCookieHeader(request) {
        const cookies = request.cookies;
        if (!cookies) {
            // Try to get from headers
            const cookieHeader = request.headers.cookie;
            return cookieHeader || null;
        }
        return Object.entries(cookies)
            .map(([name, value]) => `${name}=${value}`)
            .join('; ');
    }
    /**
     * Get or create user from SSO payload.
     */
    async getOrCreateUser(payload) {
        let user = await this.prisma.user.findUnique({
            where: { ssoId: payload.ssoId },
        });
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    ssoId: payload.ssoId,
                    email: payload.email,
                    name: payload.displayName || payload.email.split('@')[0],
                    avatarUrl: payload.avatarUrl,
                },
            });
            this.logger.log(`Created new user: ${user.email}`);
        }
        else {
            // Update user info if changed
            if (payload.displayName && user.name !== payload.displayName) {
                user = await this.prisma.user.update({
                    where: { id: user.id },
                    data: {
                        name: payload.displayName,
                        avatarUrl: payload.avatarUrl,
                    },
                });
            }
        }
        return user;
    }
    /**
     * Check if user has an active subscription or grant for a feature.
     */
    async checkFeatureAccess(userId, feature) {
        const subscription = await this.prisma.subscription.findFirst({
            where: {
                userId,
                status: 'ACTIVE',
            },
            include: { plan: true },
        });
        if (subscription?.plan) {
            const planFeatures = {
                customThemes: subscription.plan.customThemes,
                paidContent: subscription.plan.paidContent,
                customDomain: subscription.plan.customDomain,
                removeWatermark: subscription.plan.removeWatermark,
                prioritySupport: subscription.plan.prioritySupport,
            };
            return planFeatures[feature] || false;
        }
        // Check grants
        const grant = await this.prisma.userGrant.findFirst({
            where: {
                userId,
                expiresAt: { gt: new Date() },
            },
            include: { plan: true },
        });
        if (grant?.plan) {
            const planFeatures = {
                customThemes: grant.plan.customThemes,
                paidContent: grant.plan.paidContent,
                customDomain: grant.plan.customDomain,
                removeWatermark: grant.plan.removeWatermark,
                prioritySupport: grant.plan.prioritySupport,
            };
            return planFeatures[feature] || false;
        }
        return false;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map