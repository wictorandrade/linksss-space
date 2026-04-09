"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckoutDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCheckoutDto {
}
exports.CreateCheckoutDto = CreateCheckoutDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-plan-id' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCheckoutDto.prototype, "planId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'DESCONTO20' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCheckoutDto.prototype, "couponCode", void 0);
//# sourceMappingURL=create-checkout.dto.js.map