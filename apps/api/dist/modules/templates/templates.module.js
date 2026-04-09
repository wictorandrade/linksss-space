"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const templates_controller_1 = require("./templates.controller");
const templates_service_1 = require("./templates.service");
let TemplatesModule = class TemplatesModule {
};
exports.TemplatesModule = TemplatesModule;
exports.TemplatesModule = TemplatesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [templates_controller_1.TemplatesController],
        providers: [templates_service_1.TemplatesService],
        exports: [templates_service_1.TemplatesService],
    })
], TemplatesModule);
//# sourceMappingURL=templates.module.js.map