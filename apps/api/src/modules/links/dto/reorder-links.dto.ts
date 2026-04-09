import { IsString, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

class ReorderLinkItem {
  @ApiProperty()
  @IsString()
  id: string

  @ApiProperty()
  position: number
}

export class ReorderLinksDto {
  @ApiProperty({ type: [ReorderLinkItem] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReorderLinkItem)
  links: ReorderLinkItem[]
}