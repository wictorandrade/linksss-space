"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinkDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const generated_1 = require("../../../../generated");
class UpdateLinkDto {
}
exports.UpdateLinkDto = UpdateLinkDto;
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Meu Link' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: generated_1.LinkType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(generated_1.LinkType),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'globe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/icon.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: { backgroundColor: '#fff' } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateLinkDto.prototype, "style", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UpdateLinkDto.prototype, "position", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLinkDto.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLinkDto.prototype, "isPaid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 9.99 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UpdateLinkDto.prototype, "price", void 0);
//# sourceMappingURL=update-link.dto.js.map