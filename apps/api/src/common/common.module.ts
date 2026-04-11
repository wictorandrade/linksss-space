import { Module } from '@nestjs/common'
import { Base64Helper } from './helpers/base64.helper'
import { NanoIdHelper } from './helpers/nano-id.helper'
import { StringHelper } from './helpers/string.helper'

@Module({
  providers: [
    Base64Helper,
    NanoIdHelper,
    StringHelper,
  ],
  exports: [
    Base64Helper,
    NanoIdHelper,
    StringHelper,
  ],
})
export class CommonModule {}