import { ApiProperty } from '@nestjs/swagger'
import {
  IsMimeType,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class PutObjectRequiredDto {
  @ApiProperty({ default: 'filename.pdf' })
  @IsString()
  @IsNotEmpty()
  filename: string

  @ApiProperty({ default: 'application/pdf' })
  @IsMimeType()
  @IsNotEmpty()
  mimetype: string

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  fileSize: number
}