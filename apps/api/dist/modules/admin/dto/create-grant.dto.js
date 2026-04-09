"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGrantDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateGrantDto {
}
exports.CreateGrantDto = CreateGrantDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan ID' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateGrantDto.prototype, "planId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Parceria' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateGrantDto.prototype, "reason", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateGrantDto.prototype, "expiresAt", void 0);
//# sourceMappingURL=create-grant.dto.js.map