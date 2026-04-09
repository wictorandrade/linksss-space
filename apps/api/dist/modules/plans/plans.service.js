"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let PlansService = class PlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.plan.findMany({
            where: { isPublic: true },
            orderBy: { price: 'asc' },
        });
    }
    async findOne(id) {
        const plan = await this.prisma.plan.findUnique({
            where: { id },
        });
        if (!plan) {
            throw new common_1.NotFoundException('Plan not found');
        }
        return plan;
    }
    async findByName(name) {
        return this.prisma.plan.findUnique({
            where: { name },
        });
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlansService);
//# sourceMappingURL=plans.service.js.map