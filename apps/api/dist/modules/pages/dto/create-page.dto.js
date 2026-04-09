"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePageDto = exports.CreatePageDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePageDto {
}
exports.CreatePageDto = CreatePageDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'meu-perfil', description: 'Unique slug for the page' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.Matches)(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, {
        message: 'Slug must be lowercase alphanumeric with hyphens',
    }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Meu Perfil', description: 'Page title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Descrição do meu perfil' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Bem-vindo ao meu perfil!' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/avatar.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/bg.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "backgroundImageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: { font: 'plus_jakarta_sans' } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], CreatePageDto.prototype, "theme", void 0);
class UpdatePageDto {
}
exports.UpdatePageDto = UpdatePageDto;
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'novo-slug' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.Matches)(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Novo Título' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "backgroundImageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdatePageDto.prototype, "theme", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdatePageDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-page.dto.js.map