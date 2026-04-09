import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../core/prisma/prisma.service'

@Injectable()
export class TemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.template.findMany({
      where: { isPublic: true },
      orderBy: [{ isFeatured: 'desc' }, { order: 'asc' }],
    })
  }

  async findFeatured() {
    return this.prisma.template.findMany({
      where: { isPublic: true, isFeatured: true },
      orderBy: { order: 'asc' },
    })
  }

  async findBySlug(slug: string) {
    const template = await this.prisma.template.findUnique({
      where: { slug },
    })

    if (!template || !template.isPublic) {
      throw new NotFoundException('Template not found')
    }

    return template
  }
}