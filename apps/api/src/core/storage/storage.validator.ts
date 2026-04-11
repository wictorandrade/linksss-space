import { HeadObjectCommandOutput } from '@aws-sdk/client-s3'
import {
  FileTooLargeException,
  FileTooManyPartsException,
  StorageInternalErrorException,
} from '@core/storage/storage.exception'
import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class StorageValidator {
  private readonly logger = new Logger(StorageValidator.name)
  private readonly MAX_CHUNKS_QTD = 10000

  validateFileSize(fileSize: number) {
    const TWO_GB = 2 * 1024 * 1024 * 1024
    const fileHasMoreThan2GB = fileSize > TWO_GB

    if (fileHasMoreThan2GB) {
      this.logger.error(
        `Arquivo muito grande para upload multipart. Ele possui ${fileSize / (1024 * 1024)} MB`,
      )
      throw new FileTooLargeException()
    }
  }

  validateTotalChunks(totalChunks: number) {
    if (totalChunks > this.MAX_CHUNKS_QTD) {
      this.logger.error(
        `Número de partes do arquivo excede o limite de ${this.MAX_CHUNKS_QTD}. Total: ${totalChunks}`,
      )
      throw new FileTooManyPartsException(this.MAX_CHUNKS_QTD)
    }
  }

  validateObjectHead(
    objectHead: HeadObjectCommandOutput,
  ): asserts objectHead is Required<HeadObjectCommandOutput> {
    if (!this.isValidHeadObjectOutput(objectHead)) {
      throw new StorageInternalErrorException(
        'objectHead validation failed: missing required fields',
      )
    }
  }

  private isValidHeadObjectOutput(
    objectHead: HeadObjectCommandOutput,
  ): objectHead is Required<HeadObjectCommandOutput> {
    return (
      !!objectHead &&
      objectHead.ContentType !== undefined &&
      objectHead.ContentLength !== undefined &&
      objectHead.ETag !== undefined &&
      objectHead.LastModified !== undefined &&
      objectHead.AcceptRanges !== undefined &&
      objectHead.Metadata !== undefined
    )
  }
}