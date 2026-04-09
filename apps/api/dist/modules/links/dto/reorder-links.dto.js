"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderLinksDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class ReorderLinkItem {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ReorderLinkItem.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Number)
], ReorderLinkItem.prototype, "position", void 0);
class ReorderLinksDto {
}
exports.ReorderLinksDto = ReorderLinksDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReorderLinkItem] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ReorderLinkItem),
    tslib_1.__metadata("design:type", Array)
], ReorderLinksDto.prototype, "links", void 0);
//# sourceMappingURL=reorder-links.dto.js.map