import { Injectable, Logger } from '@nestjs/common'
import { Base64Helper } from '@common/helpers/base64.helper'
import { NanoIdHelper } from '@common/helpers/nano-id.helper'
import { StringHelper } from '@common/helpers/string.helper'
import { plainToInstance } from 'class-transformer'
import { ObjectMetadataException } from './storage.exception'
import { ObjectMetadata, ObjectMetadataRaw } from './storage.interface'
import { RenameObjectDto } from './dto/rename-object.dto'
import path from 'node:path'

@Injectable()
export class StorageHelper {
  private readonly logger = new Logger(StorageHelper.name)

  constructor(
    private readonly base64Helper: Base64Helper,
    private readonly nanoIdHelper: NanoIdHelper,
    private readonly stringHelper: StringHelper,
  ) {}

  getFilePathFromUrl(url: string): string {
    const splitUrl = url.split('?')[0].split('/')
    return splitUrl.slice(2, splitUrl.length).join('/')
  }

  getFileNameFromPath(filePath: string): string {
    const splitPath = filePath.split('/')
    return splitPath[splitPath.length - 1]
  }

  getFolderFromPath(filePath: string): string {
    const splitPath = filePath.split('/')
    return splitPath.slice(0, splitPath.length - 1).join('/')
  }

  createKey(filename: string, folder = '', newFilename?: string): string {
    const extension = path.posix.extname(filename)
    const randomName = this.nanoIdHelper.generateCustomNanoId()

    const sluggedName = newFilename
      ? `${randomName}-${this.stringHelper.slugify(newFilename)}`
      : randomName

    const finalFilename = `/${sluggedName}${extension}`

    return path.posix.join(path.posix.normalize(folder), finalFilename)
  }

  createTempKey(filename: string, folder = '', newFilename?: string): string {
    const tmpFolder = path.posix.join('tmp', folder)
    return this.createKey(filename, tmpFolder, newFilename)
  }

  getRenamedKey(key: string, renameObjectDto: RenameObjectDto): string {
    const { newFilename } = plainToInstance(RenameObjectDto, renameObjectDto)
    const folder = this.getFolderFromPath(key)
    const currentFileName = this.getFileNameFromPath(key)
    return this.createKey(currentFileName, folder, newFilename)
  }

  metadataToRaw(metadata: ObjectMetadata): ObjectMetadataRaw {
    const jsonPayload = JSON.stringify(metadata)
    const base64Payload = this.base64Helper.encode(jsonPayload)

    return { payload: base64Payload }
  }

  rawMetadataToMetadata(rawMetadata: ObjectMetadataRaw): ObjectMetadata {
    if (!rawMetadata?.payload) throw new ObjectMetadataException()

    try {
      const decodedPayload = this.base64Helper.decode(rawMetadata.payload)
      return JSON.parse(decodedPayload)
    } catch (e) {
      this.logger.error('Erro ao fazer o parse do metadado do arquivo', e)
      throw new ObjectMetadataException()
    }
  }

  getFileName(originalFilename: string, customName?: string): string {
    const extension = path.posix.extname(originalFilename)
    const nanoId = this.nanoIdHelper.generateCustomNanoId()
    const slug = customName ? this.stringHelper.slugify(customName) : ''

    return slug ? `${nanoId}-${slug}${extension}` : `${nanoId}${extension}`
  }

  getCustomFileName(originalFilename: string, customName: string): string {
    const extension = path.posix.extname(originalFilename)
    return `${this.stringHelper.slugify(customName)}${extension}`
  }
}