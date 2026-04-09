"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCouponDto {
}
exports.CreateCouponDto = CreateCouponDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DESCONTO20' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCouponDto.prototype, "code", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCouponDto.prototype, "discountPct", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10.00 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCouponDto.prototype, "discountAmt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCouponDto.prototype, "planId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCouponDto.prototype, "maxUses", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateCouponDto.prototype, "expiresAt", void 0);
//# sourceMappingURL=create-coupon.dto.js.map