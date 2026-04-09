"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePageDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdatePageDto {
}
exports.UpdatePageDto = UpdatePageDto;
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'meu-slug' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Meu Site' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Minha descrição' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Developer & Creator' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/avatar.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "avatarUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com/bg.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], UpdatePageDto.prototype, "backgroundImageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: { font: 'plus_jakarta_sans' } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdatePageDto.prototype, "theme", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdatePageDto.prototype, "isActive", void 0);
//# sourceMappingURL=update-page.dto.js.map