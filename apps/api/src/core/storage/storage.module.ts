import { CommonModule } from '@common/common.module'
import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { StorageController } from './storage.controller'
import { StorageHelper } from './storage.helper'
import { StorageService } from './storage.service'
import { StorageValidator } from './storage.validator'

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [StorageController],
  providers: [StorageService, StorageHelper, StorageValidator],
  exports: [StorageService, StorageHelper],
})
export class StorageModule {}