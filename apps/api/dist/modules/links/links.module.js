"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const links_controller_1 = require("./links.controller");
const links_service_1 = require("./links.service");
const user_module_1 = require("../../core/user/user.module");
let LinksModule = class LinksModule {
};
exports.LinksModule = LinksModule;
exports.LinksModule = LinksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule],
        controllers: [links_controller_1.LinksController],
        providers: [links_service_1.LinksService],
        exports: [links_service_1.LinksService],
    })
], LinksModule);
//# sourceMappingURL=links.module.js.map