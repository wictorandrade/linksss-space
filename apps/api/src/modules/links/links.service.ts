import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'
import { UserService } from '../../core/user/user.service'
import { CreateLinkDto } from './dto/create-link.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { ReorderLinksDto } from './dto/reorder-links.dto'

@Injectable()
export class LinksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(userId: string, createLinkDto: CreateLinkDto) {
    // Verify page ownership
    const page = await this.prisma.page.findUnique({
      where: { id: createLinkDto.pageId },
    })

    if (!page) {
      throw new NotFoundException('Page not found')
    }

    if (page.userId !== userId) {
      throw new ForbiddenException('Not authorized')
    }

    // Check plan limits
    const plan = await this.userService.getEffectivePlan(userId)
    if (!plan) {
      throw new BadRequestException('Plan not found')
    }
    const currentLinks = await this.prisma.link.count({
      where: { pageId: createLinkDto.pageId },
    })

    if (plan.maxLinks !== -1 && currentLinks >= plan.maxLinks) {
      throw new BadRequestException(
        `Plan limit reached. Max links: ${plan.maxLinks}`,
      )
    }

    // Get max position
    const maxPosition = await this.prisma.link.aggregate({
      where: { pageId: createLinkDto.pageId },
      _max: { position: true },
    })

    const position = (maxPosition._max.position || 0) + 1

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
    })
  }

  async findByPage(userId: string, pageId: string) {
    // Verify page ownership
    const page = await this.prisma.page.findUnique({
      where: { id: pageId },
    })

    if (!page) {
      throw new NotFoundException('Page not found')
    }

    if (page.userId !== userId) {
      throw new ForbiddenException('Not authorized')
    }

    return this.prisma.link.findMany({
      where: { pageId },
      orderBy: { position: 'asc' },
    })
  }

  async findOne(userId: string, id: string) {
    const link = await this.prisma.link.findUnique({
      where: { id },
      include: { page: true },
    })

    if (!link) {
      throw new NotFoundException('Link not found')
    }

    if (link.page.userId !== userId) {
      throw new ForbiddenException('Not authorized')
    }

    return link
  }

  async update(userId: string, id: string, updateLinkDto: UpdateLinkDto) {
    // Verify ownership
    await this.findOne(userId, id)

    return this.prisma.link.update({
      where: { id },
      data: {
        type: updateLinkDto.type as any,
        title: updateLinkDto.title,
        url: updateLinkDto.url,
        icon: updateLinkDto.icon,
        imageUrl: updateLinkDto.imageUrl,
        style: updateLinkDto.style as any,
        position: updateLinkDto.position,
        isActive: updateLinkDto.isActive,
        isPaid: updateLinkDto.isPaid,
        price: updateLinkDto.price,
      },
    })
  }

  async remove(userId: string, id: string) {
    // Verify ownership
    await this.findOne(userId, id)

    await this.prisma.link.delete({ where: { id } })
  }

  async reorder(userId: string, reorderDto: ReorderLinksDto) {
    // Verify all links belong to user's pages
    const links = await this.prisma.link.findMany({
      where: { id: { in: reorderDto.links.map((l) => l.id) } },
      include: { page: true },
    })

    for (const link of links) {
      if (link.page.userId !== userId) {
        throw new ForbiddenException('Not authorized')
      }
    }

    // Update positions
    await Promise.all(
      reorderDto.links.map((item) =>
        this.prisma.link.update({
          where: { id: item.id },
          data: { position: item.position },
        }),
      ),
    )

    return { success: true }
  }

  async trackClick(
    linkId: string,
    data: { referrer?: string; device?: string; country?: string },
  ) {
    const link = await this.prisma.link.findUnique({
      where: { id: linkId },
    })

    if (!link) {
      return // Silently fail for invalid clicks
    }

    await this.prisma.linkClick.create({
      data: {
        linkId,
        referrer: data.referrer,
        device: data.device,
        country: data.country,
      },
    })
  }
}