import path from 'node:path'
import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CopyObjectCommand,
  CreateMultipartUploadCommand,
  DeleteObjectCommand,
  type DeleteObjectCommandOutput,
  GetObjectCommand,
  HeadObjectCommand,
  type HeadObjectCommandOutput,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
  UploadPartCommand,
} from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { StorageValidator } from '@core/storage/storage.validator'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { plainToInstance } from 'class-transformer'
import { Response } from 'express'
import ms from 'ms'
import { PutObjectDto } from './dto/put-object.dto'
import { UploadCompleteMultipartDto } from './dto/upload-complete-multipart.dto'
import {
  DeleteObjectException,
  FileNotFoundException,
  GetSignedPutObjectException,
  MultipartUploadAbortException,
  MultipartUploadCompleteException,
  StorageInternalErrorException,
  UpdateObjectException,
  UpdateObjectMetadataException,
} from './storage.exception'
import { StorageHelper } from './storage.helper'
import {
  type MultipartSignedUrl,
  type ObjectMetadata,
  type ObjectMetadataRaw,
  PutBufferObjectDto,
  type SignedPutObjectMultiPart,
} from './storage.interface'

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name)
  private readonly FIVE_MINUTES_IN_SECONDS = ms('5m') / 1000

  constructor(
    private readonly configService: ConfigService,
    private readonly storageHelper: StorageHelper,
    private readonly storageValidator: StorageValidator,
  ) {}

  getS3Client(): S3Client {
    const awsRegion = this.configService.getOrThrow<string>('aws.region')
    const awsAccessKeyId = this.configService.getOrThrow<string>('aws.accessKeyId')
    const awsSecretAccessKey = this.configService.getOrThrow<string>('aws.secretAccessKey')
    const awsS3Endpoint = this.configService.getOrThrow<string | undefined>('aws.s3.endpoint')

    return new S3Client({
      region: awsRegion,
      credentials: {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
      },
      endpoint: awsS3Endpoint,
      forcePathStyle: !!awsS3Endpoint,
    })
  }

  getS3Bucket(): string {
    return this.configService.getOrThrow<string>('aws.s3.bucket')
  }

  async *listObjectsKeysGenerator(folderPath: string): AsyncGenerator<string> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    let continuationToken: string | undefined

    do {
      const objects = await s3Client.send(
        new ListObjectsV2Command({
          Bucket: awsS3Bucket,
          Prefix: folderPath,
          ContinuationToken: continuationToken,
        }),
      )

      if (objects.Contents) {
        for (const object of objects.Contents) {
          if (object.Key) {
            yield object.Key
          }
        }
      }

      continuationToken = objects.NextContinuationToken
    } while (continuationToken)
  }

  async signedPutObjectList(
    putObjectDto: PutObjectDto,
    fileSize: number,
  ): Promise<SignedPutObjectMultiPart> {
    const chunkSize = this.calculateChunkSize(fileSize)
    const totalChunks = Math.ceil(fileSize / chunkSize)

    this.storageValidator.validateFileSize(fileSize)
    this.storageValidator.validateTotalChunks(totalChunks)

    const putObjectDtoInstance = plainToInstance(PutObjectDto, putObjectDto)

    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    const key = this.storageHelper.createKey(
      putObjectDtoInstance.filename,
      putObjectDtoInstance.folder,
      `${putObjectDtoInstance.newFilename ?? ''}_${Date.now()}`,
    )

    try {
      const metadataRaw = this.storageHelper.metadataToRaw(
        putObjectDtoInstance?.metadata ?? {},
      )

      const createMultiPartCommand = new CreateMultipartUploadCommand({
        Bucket: awsS3Bucket,
        Key: key,
        ContentType: putObjectDtoInstance.mimetype,
        Metadata: metadataRaw as Record<string, string>,
      })

      const output = await s3Client.send(createMultiPartCommand)

      const signedUrls: MultipartSignedUrl[] = []

      for (let i = 0; i < totalChunks; i++) {
        const partNumber = i + 1

        const url = await getSignedUrl(
          s3Client,
          new UploadPartCommand({
            Bucket: awsS3Bucket,
            Key: key,
            UploadId: output.UploadId,
            PartNumber: partNumber,
          }),
          { expiresIn: this.FIVE_MINUTES_IN_SECONDS },
        )
        signedUrls.push({ partNumber, url })
      }

      if (!output?.UploadId) throw new StorageInternalErrorException()

      return {
        key,
        uploadId: output.UploadId,
        urls: signedUrls,
        chunkSize,
      }
    } catch (e) {
      this.logger.error('Erro ao assinar upload multipart', e)
      throw new GetSignedPutObjectException()
    }
  }

  async completeMultipartUpload(
    uploadCompleteMultipartDto: UploadCompleteMultipartDto,
  ): Promise<{ key: string }> {
    const { key, uploadId, eTagParts } = uploadCompleteMultipartDto

    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    const orderedETagParts = eTagParts.sort((a, b) => a.PartNumber - b.PartNumber)

    try {
      const command = new CompleteMultipartUploadCommand({
        Bucket: awsS3Bucket,
        Key: key,
        UploadId: uploadId,
        MultipartUpload: {
          Parts: orderedETagParts.map((p) => ({
            ETag: p.ETag,
            PartNumber: p.PartNumber,
          })),
        },
      })

      const response = await s3Client.send(command)
      if (!response?.Key) throw new StorageInternalErrorException()

      return { key: response.Key }
    } catch (e) {
      this.logger.error('Erro ao completar o upload multipart', e)

      try {
        await this.abortMultipartUpload(key, uploadId)
      } catch (abortError) {
        this.logger.error('Erro ao abortar o upload multipart após falha', abortError)
      }

      throw new MultipartUploadCompleteException()
    }
  }

  async abortMultipartUpload(key: string, uploadId: string): Promise<void> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    try {
      const command = new AbortMultipartUploadCommand({
        Bucket: awsS3Bucket,
        Key: key,
        UploadId: uploadId,
      })

      await s3Client.send(command)
    } catch (e) {
      this.logger.error('Erro ao abortar o upload multipart', e)
      throw new MultipartUploadAbortException()
    }
  }

  async uploadBufferObject(putBufferDto: PutBufferObjectDto): Promise<string> {
    const putObjectDtoInstance = plainToInstance(PutBufferObjectDto, putBufferDto)

    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()
    const awsS3Endpoint = this.configService.getOrThrow<string | undefined>('aws.s3.endpoint')

    const key = path.posix.join(
      path.posix.normalize(putBufferDto.folder),
      putBufferDto.filename,
    )

    this.logger.verbose(`Uploading file: ${key} | Bucket: ${awsS3Bucket} | Endpoint: ${awsS3Endpoint}`)

    try {
      const metadataRaw = this.storageHelper.metadataToRaw(
        putObjectDtoInstance?.metadata ?? {},
      )

      const upload = new Upload({
        client: s3Client,
        params: {
          Bucket: awsS3Bucket,
          Key: key,
          Body: putBufferDto.buffer,
          ContentType: putObjectDtoInstance.mimetype,
          Metadata: metadataRaw as Record<string, string>,
        },
      })

      const result = await upload.done()

      if (!result?.Key) throw new StorageInternalErrorException()

      return result.Key
    } catch (e) {
      this.logger.error('Erro ao fazer upload do arquivo', e)
      throw new GetSignedPutObjectException()
    }
  }

  async copyFilesIntoOtherFolder(
    sourceKey: string,
    destinationKey: string,
    metadata: ObjectMetadata = {},
  ): Promise<void> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    const metadataRaw = this.storageHelper.metadataToRaw(metadata)

    await s3Client.send(
      new CopyObjectCommand({
        Bucket: awsS3Bucket,
        CopySource: `${awsS3Bucket}/${sourceKey}`,
        Key: destinationKey,
        Metadata: metadataRaw as Record<string, string>,
        MetadataDirective: Object.keys(metadata).length > 0 ? 'REPLACE' : 'COPY',
      }),
    )
  }

  async copyFileToTmp(
    sourceKey: string,
    metadata: ObjectMetadata = {},
  ): Promise<void> {
    await this.copyFilesIntoOtherFolder(sourceKey, `tmp/${sourceKey}`, metadata)
  }

  async updateObjectName(key: string, newKey: string): Promise<void> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    try {
      await s3Client.send(
        new CopyObjectCommand({
          Bucket: awsS3Bucket,
          CopySource: `${awsS3Bucket}/${key}`,
          Key: newKey,
        }),
      )

      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: awsS3Bucket,
          Key: key,
        }),
      )
    } catch (e) {
      this.logger.error('Erro ao atualizar o nome do arquivo', e)
      throw new UpdateObjectException()
    }
  }

  async deleteObject(key: string): Promise<DeleteObjectCommandOutput> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    try {
      return await s3Client.send(
        new DeleteObjectCommand({
          Bucket: awsS3Bucket,
          Key: key,
        }),
      )
    } catch (e) {
      this.logger.error('Erro ao deletar o arquivo', e)
      throw new DeleteObjectException()
    }
  }

  async updateObjectMetadata(
    key: string,
    metadata: ObjectMetadata,
  ): Promise<void> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    try {
      const objectHead = await this.getHeadObject(s3Client, awsS3Bucket, key)

      this.storageValidator.validateObjectHead(objectHead)

      const objectMetadata = this.storageHelper.rawMetadataToMetadata(objectHead.Metadata)

      const newMetadata = {
        ...objectHead.Metadata,
        ...this.storageHelper.metadataToRaw({ ...objectMetadata, ...metadata }),
      }

      await s3Client.send(
        new CopyObjectCommand({
          Bucket: awsS3Bucket,
          CopySource: `${awsS3Bucket}/${key}`,
          Key: key,
          MetadataDirective: 'REPLACE',
          Metadata: newMetadata,
          ContentType: objectHead.ContentType,
        }),
      )
    } catch (e) {
      this.logger.error('Erro ao atualizar o metadata do arquivo', e)
      throw new UpdateObjectMetadataException()
    }
  }

  async getSignedUrl(
    s3Client: S3Client,
    awsS3Bucket: string,
    key: string,
    expiresInAsSeconds: number,
  ): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: awsS3Bucket,
      Key: key,
    })

    return await getSignedUrl(s3Client, command, { expiresIn: expiresInAsSeconds })
  }

  async redirectToStorageFile(res: Response, key: string): Promise<void> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    this.logger.verbose(`Streaming file: ${key} | Bucket: ${awsS3Bucket}`)

    try {
      const objectHead = await this.getHeadObject(s3Client, awsS3Bucket, key)
      this.storageValidator.validateObjectHead(objectHead)

      const etag = objectHead.ETag ? String(objectHead.ETag).replace(/"/g, '') : undefined
      const fileName = key.split('/').pop() || 'file'

      const s3Response = await s3Client.send(
        new GetObjectCommand({ Bucket: awsS3Bucket, Key: key }),
      )

      res.setHeader('Content-Type', objectHead.ContentType!)
      res.setHeader('Content-Length', String(objectHead.ContentLength))
      res.setHeader('Content-Disposition', `inline; filename="${fileName}"`)
      res.setHeader('Cache-Control', 'public, max-age=3600')

      if (etag) {
        res.setHeader('ETag', `"${etag}"`)
      }

      this.logger.debug(`Streaming: ${key} | ETag: ${etag}`)

      const bodyStream = s3Response.Body as NodeJS.ReadableStream
      bodyStream.pipe(res)
    } catch (e) {
      this.logger.error('Problema ao adquirir o arquivo', e)
      throw new FileNotFoundException()
    }
  }

  async getObjectMetadata(key: string): Promise<ObjectMetadata> {
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    const objectHead = await this.getHeadObject(s3Client, awsS3Bucket, key)

    const metadataRaw: ObjectMetadataRaw = objectHead?.Metadata ?? {}

    return this.storageHelper.rawMetadataToMetadata(metadataRaw)
  }

  async getHeadObject(
    s3Client: S3Client,
    awsS3Bucket: string,
    key: string,
  ): Promise<HeadObjectCommandOutput> {
    const headCommand = new HeadObjectCommand({
      Bucket: awsS3Bucket,
      Key: key,
    })

    return await s3Client.send(headCommand)
  }

  private calculateChunkSize(fileSizeInBytes: number): number {
    const THIRTY_TWO_MB = 32 * 1024 * 1024
    const SIXTY_FOUR_MB = 64 * 1024 * 1024
    const ONE_GIGABYTE = 1024 * 1024 * 1024

    if (fileSizeInBytes < ONE_GIGABYTE) {
      return THIRTY_TWO_MB
    } else {
      return SIXTY_FOUR_MB
    }
  }

  async getSignedTempUploadUrl(
    putObjectDto: PutObjectDto,
  ): Promise<{ key: string; url: string }> {
    const putObjectDtoInstance = plainToInstance(PutObjectDto, putObjectDto)
    const s3Client = this.getS3Client()
    const awsS3Bucket = this.getS3Bucket()

    const key = this.storageHelper.createTempKey(
      putObjectDtoInstance.filename,
      putObjectDtoInstance.folder,
      putObjectDtoInstance.newFilename,
    )

    try {
      const metadataRaw = this.storageHelper.metadataToRaw(
        putObjectDtoInstance?.metadata ?? {},
      )
      const signedUrl = await getSignedUrl(
        s3Client,
        new PutObjectCommand({
          Bucket: awsS3Bucket,
          Key: `tmp/${key}`,
          ContentType: putObjectDtoInstance.mimetype,
          Metadata: metadataRaw as Record<string, string>,
        }),
        { expiresIn: ms('20m') / 1000 },
      )

      return { key: `tmp/${key}`, url: signedUrl }
    } catch (e) {
      this.logger.error('Erro ao gerar URL de upload temporário', e)
      throw new GetSignedPutObjectException()
    }
  }

  async confirmTempObject(
    tempKey: string,
    destinationFolder: string,
  ): Promise<string> {
    const filename = tempKey.split('/').pop()
    if (!filename) throw new StorageInternalErrorException()

    const newKey = path.posix.join(
      path.posix.normalize(destinationFolder),
      filename,
    )

    try {
      await this.copyFilesIntoOtherFolder(tempKey, newKey)
      await this.deleteObject(tempKey)

      return newKey
    } catch (e) {
      this.logger.error('Erro ao confirmar o upload temporário', e)
      throw new UpdateObjectException()
    }
  }

  getPublicUrl(key: string): string {
    const apiPublicUrl = this.configService.getOrThrow<string>('apiPublicUrl')
    return `${apiPublicUrl}/storage/${key}`
  }
}