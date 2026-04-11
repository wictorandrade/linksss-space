import { SlugTransform } from '@common/decorators/slug-transform.decorator'

export class RenameObjectDto {
  @SlugTransform({ trim: true, lower: true, replacement: '_' })
  newFilename: string
}