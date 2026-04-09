import { Module } from '@nestjs/common'
import { LinksController } from './links.controller'
import { LinksService } from './links.service'
import { UserModule } from '../../core/user/user.module'

@Module({
  imports: [UserModule],
  controllers: [LinksController],
  providers: [LinksService],
  exports: [LinksService],
})
export class LinksModule {}