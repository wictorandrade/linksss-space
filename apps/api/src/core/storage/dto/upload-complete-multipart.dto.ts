import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

class ETagPartDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ETag: string

  @ApiProperty()
  @IsNotEmpty()
  PartNumber: number
}

export class UploadCompleteMultipartDto {
  @ApiProperty()
  @IsNotEmpty()
  key: string

  @ApiProperty()
  @IsNotEmpty()
  uploadId: string

  @ApiProperty({ type: [ETagPartDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ETagPartDto)
  eTagParts: ETagPartDto[]
}