"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let TemplatesService = class TemplatesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.template.findMany({
            where: { isPublic: true },
            orderBy: [{ isFeatured: 'desc' }, { order: 'asc' }],
        });
    }
    async findFeatured() {
        return this.prisma.template.findMany({
            where: { isPublic: true, isFeatured: true },
            orderBy: { order: 'asc' },
        });
    }
    async findBySlug(slug) {
        const template = await this.prisma.template.findUnique({
            where: { slug },
        });
        if (!template || !template.isPublic) {
            throw new common_1.NotFoundException('Template not found');
        }
        return template;
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map