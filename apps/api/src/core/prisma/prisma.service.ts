import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '../../../generated'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient({
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'info', 'warn', 'error']
          : ['error'],
    })
  }

  async onModuleInit() {
    await this.prisma.$connect()
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect()
  }

  // Expose all Prisma client properties
  get user() { return this.prisma.user }
  get page() { return this.prisma.page }
  get link() { return this.prisma.link }
  get content() { return this.prisma.content }
  get contentPurchase() { return this.prisma.contentPurchase }
  get pageAnalytics() { return this.prisma.pageAnalytics }
  get linkClick() { return this.prisma.linkClick }
  get plan() { return this.prisma.plan }
  get subscription() { return this.prisma.subscription }
  get coupon() { return this.prisma.coupon }
  get userGrant() { return this.prisma.userGrant }
  get template() { return this.prisma.template }
  get platformSettings() { return this.prisma.platformSettings }

  // Expose $ methods
  $connect() { return this.prisma.$connect() }
  $disconnect() { return this.prisma.$disconnect() }
  $transaction<T>(fn: (prisma: PrismaClient) => Promise<T>) { return this.prisma.$transaction(fn) }
  $queryRaw<T = unknown>(query: TemplateStringsArray, ...values: unknown[]) {
    return this.prisma.$queryRaw<T>(query, ...values)
  }
  $executeRaw(query: TemplateStringsArray, ...values: unknown[]) {
    return this.prisma.$executeRaw(query, ...values)
  }
}