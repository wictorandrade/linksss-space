"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const is_public_decorator_1 = require("../../core/auth/decorators/is-public.decorator");
const coupons_service_1 = require("./coupons.service");
let CouponsController = class CouponsController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    async validate(code) {
        return this.couponsService.validate(code);
    }
};
exports.CouponsController = CouponsController;
tslib_1.__decorate([
    (0, common_1.Get)('validate/:code'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, swagger_1.ApiOperation)({ summary: 'Validate coupon code' }),
    tslib_1.__param(0, (0, common_1.Param)('code')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsController.prototype, "validate", null);
exports.CouponsController = CouponsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('coupons'),
    (0, common_1.Controller)('coupons'),
    tslib_1.__metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsController);
//# sourceMappingURL=coupons.controller.js.map