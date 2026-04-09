"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOnly = exports.IS_ADMIN_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_ADMIN_KEY = 'isAdmin';
const AdminOnly = () => (0, common_1.SetMetadata)(exports.IS_ADMIN_KEY, true);
exports.AdminOnly = AdminOnly;
//# sourceMappingURL=admin-only.decorator.js.map