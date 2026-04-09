"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const user_service_1 = require("../../core/user/user.service");
let LinksService = class LinksService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async create(userId, createLinkDto) {
        // Verify page ownership
        const page = await this.prisma.page.findUnique({
            where: { id: createLinkDto.pageId },
        });
        if (!page) {
            throw new common_1.NotFoundException('Page not found');
        }
        if (page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized');
        }
        // Check plan limits
        const plan = await this.userService.getEffectivePlan(userId);
        if (!plan) {
            throw new common_1.BadRequestException('Plan not found');
        }
        const currentLinks = await this.prisma.link.count({
            where: { pageId: createLinkDto.pageId },
        });
        if (plan.maxLinks !== -1 && currentLinks >= plan.maxLinks) {
            throw new common_1.BadRequestException(`Plan limit reached. Max links: ${plan.maxLinks}`);
        }
        // Get max position
        const maxPosition = await this.prisma.link.aggregate({
            where: { pageId: createLinkDto.pageId },
            _max: { position: true },
        });
        const position = (maxPosition._max.position || 0) + 1;
        return this.prisma.link.create({
            data: {
                pageId: createLinkDto.pageId,
                type: createLinkDto.type || 'URL',
                title: createLinkDto.title,
                url: createLinkDto.url,
                icon: createLinkDto.icon,
                imageUrl: createLinkDto.imageUrl,
                style: createLinkDto.style || {},
                position,
                isPaid: createLinkDto.isPaid || false,
                price: createLinkDto.price,
            },
        });
    }
    async findByPage(userId, pageId) {
        // Verify page ownership
        const page = await this.prisma.page.findUnique({
            where: { id: pageId },
        });
        if (!page) {
            throw new common_1.NotFoundException('Page not found');
        }
        if (page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized');
        }
        return this.prisma.link.findMany({
            where: { pageId },
            orderBy: { position: 'asc' },
        });
    }
    async findOne(userId, id) {
        const link = await this.prisma.link.findUnique({
            where: { id },
            include: { page: true },
        });
        if (!link) {
            throw new common_1.NotFoundException('Link not found');
        }
        if (link.page.userId !== userId) {
            throw new common_1.ForbiddenException('Not authorized');
        }
        return link;
    }
    async update(userId, id, updateLinkDto) {
        // Verify ownership
        await this.findOne(userId, id);
        return this.prisma.link.update({
            where: { id },
            data: {
                type: updateLinkDto.type,
                title: updateLinkDto.title,
                url: updateLinkDto.url,
                icon: updateLinkDto.icon,
                imageUrl: updateLinkDto.imageUrl,
                style: updateLinkDto.style,
                position: updateLinkDto.position,
                isActive: updateLinkDto.isActive,
                isPaid: updateLinkDto.isPaid,
                price: updateLinkDto.price,
            },
        });
    }
    async remove(userId, id) {
        // Verify ownership
        await this.findOne(userId, id);
        await this.prisma.link.delete({ where: { id } });
    }
    async reorder(userId, reorderDto) {
        // Verify all links belong to user's pages
        const links = await this.prisma.link.findMany({
            where: { id: { in: reorderDto.links.map((l) => l.id) } },
            include: { page: true },
        });
        for (const link of links) {
            if (link.page.userId !== userId) {
                throw new common_1.ForbiddenException('Not authorized');
            }
        }
        // Update positions
        await Promise.all(reorderDto.links.map((item) => this.prisma.link.update({
            where: { id: item.id },
            data: { position: item.position },
        })));
        return { success: true };
    }
    async trackClick(linkId, data) {
        const link = await this.prisma.link.findUnique({
            where: { id: linkId },
        });
        if (!link) {
            return; // Silently fail for invalid clicks
        }
        await this.prisma.linkClick.create({
            data: {
                linkId,
                referrer: data.referrer,
                device: data.device,
                country: data.country,
            },
        });
    }
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], LinksService);
//# sourceMappingURL=links.service.js.map