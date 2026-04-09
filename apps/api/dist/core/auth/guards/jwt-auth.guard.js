"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = exports.SsoAuthGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const is_public_decorator_1 = require("../decorators/is-public.decorator");
const admin_only_decorator_1 = require("../decorators/admin-only.decorator");
const auth_service_1 = require("../auth.service");
let SsoAuthGuard = class SsoAuthGuard {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(is_public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const isAdmin = this.reflector.getAllAndOverride(admin_only_decorator_1.IS_ADMIN_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const request = context.switchToHttp().getRequest();
        try {
            const payload = isAdmin
                ? await this.authService.validateAdminSession(request)
                : await this.authService.validateSession(request);
            const user = await this.authService.getOrCreateUser(payload);
            request.user = user;
            request.ssoPayload = payload;
            return true;
        }
        catch (error) {
            if (error instanceof common_1.ForbiddenException) {
                throw error;
            }
            throw new common_1.UnauthorizedException('Authentication required');
        }
    }
};
exports.SsoAuthGuard = SsoAuthGuard;
exports.JwtAuthGuard = SsoAuthGuard;
exports.JwtAuthGuard = exports.SsoAuthGuard = SsoAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector,
        auth_service_1.AuthService])
], SsoAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map