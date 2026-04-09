"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const pages_controller_1 = require("./pages.controller");
const pages_service_1 = require("./pages.service");
const user_module_1 = require("../../core/user/user.module");
let PagesModule = class PagesModule {
};
exports.PagesModule = PagesModule;
exports.PagesModule = PagesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule],
        controllers: [pages_controller_1.PagesController],
        providers: [pages_service_1.PagesService],
        exports: [pages_service_1.PagesService],
    })
], PagesModule);
//# sourceMappingURL=pages.module.js.map