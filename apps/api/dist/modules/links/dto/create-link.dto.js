"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinkDto = exports.CreateLinkDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const generated_1 = require("../../../../generated");
class CreateLinkDto {
}
exports.CreateLinkDto = CreateLinkDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page ID' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "pageId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: generated_1.LinkType, default: generated_1.LinkType.URL }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(generated_1.LinkType),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Meu Instagram' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://instagram.com/me' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'instagram' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/icon.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreateLinkDto.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: { backgroundColor: '#ffffff' } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreateLinkDto.prototype, "style", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateLinkDto.prototype, "isPaid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 9.99 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateLinkDto.prototype, "price", void 0);
class UpdateLinkDto {
}
exports.UpdateLinkDto = UpdateLinkDto;
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(generated_1.LinkType),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdateLinkDto.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateLinkDto.prototype, "style", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLinkDto.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLinkDto.prototype, "isPaid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UpdateLinkDto.prototype, "price", void 0);
//# sourceMappingURL=create-link.dto.js.map