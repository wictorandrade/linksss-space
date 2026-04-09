"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, jwt_auth_guard_1.SsoAuthGuard],
        exports: [auth_service_1.AuthService, jwt_auth_guard_1.SsoAuthGuard],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map