import { SlugTransform } from '@common/decorators/slug-transform.decorator'
import { ObjectMetadata } from '../storage.interface'

export class PutObjectDto {
  filename: string
  mimetype: string

  @SlugTransform({ trim: true, lower: true, replacement: '_' })
  newFilename?: string

  @SlugTransform({ trim: true, lower: true, replacement: '/' })
  folder?: string

  metadata?: ObjectMetadata
}