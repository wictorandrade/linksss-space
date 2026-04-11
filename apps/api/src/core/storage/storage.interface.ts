export interface MultipartSignedUrl {
  partNumber: number
  url: string
}

export interface SignedPutObjectMultiPart {
  urls: MultipartSignedUrl[]
  key: string
  uploadId: string
  chunkSize: number
}

export interface UploadData {
  filePath: string
  fileName: string
}

export class ObjectMetadataRaw {
  payload?: string
}

export class ObjectMetadata {
  public?: boolean
  userId?: string
}

export interface PutObjectStreamPayload {
  contentType?: string
  contentDisposition?: string
  contentEncoding?: string
  contentLength?: number
  metadata?: ObjectMetadata
}

export class PutBufferObjectDto {
  filename: string
  mimetype: string
  folder: string
  metadata?: ObjectMetadata
  buffer: Buffer
}