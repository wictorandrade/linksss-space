import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'

export class GetSignedPutObjectException extends BadRequestException {
  constructor() {
    super('Erro ao lidar com a assinatura do upload')
  }
}

export class DeleteObjectException extends BadRequestException {
  constructor() {
    super('Erro ao deletar o arquivo')
  }
}

export class UpdateObjectMetadataException extends BadRequestException {
  constructor() {
    super('Problema ao atualizar os metadados do arquivo')
  }
}

export class UpdateObjectException extends BadRequestException {
  constructor() {
    super('Problema ao atualizar o arquivo')
  }
}

export class FileNotFoundException extends NotFoundException {
  constructor() {
    super('Arquivo não encontrado')
  }
}

export class MultipartUploadUrlException extends BadRequestException {
  constructor() {
    super('Erro ao gerar URL de upload em partes')
  }
}

export class MultipartUploadAbortException extends BadRequestException {
  constructor() {
    super('Erro ao abortar o upload em partes')
  }
}

export class MultipartUploadCompleteException extends BadRequestException {
  constructor() {
    super('Erro ao completar o upload em partes')
  }
}

export class FileTooLargeException extends BadRequestException {
  constructor() {
    super('Arquivo muito grande para upload. Tamanho limite é de 2GB.')
  }
}

export class FileTooManyPartsException extends BadRequestException {
  constructor(maxParts: number) {
    super(`Número de partes do arquivo excede o limite de ${maxParts}.`)
  }
}

export class ObjectMetadataException extends BadRequestException {
  constructor() {
    super('Erro ao realizar operações com esse Objeto, Metadata com erros.')
  }
}

export class StorageInternalErrorException extends InternalServerErrorException {
  constructor(message = 'Internal Storage Error') {
    super(message)
  }
}