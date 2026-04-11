import { StorageService } from '@core/storage/storage.service'
import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'

/**
 * Controller responsável por servir arquivos do storage via proxy.
 *
 * Como o Cloudflare R2/MinIO não suporta ACLs por objeto, os arquivos são servidos
 * através da API usando streaming. Isso mantém o bucket privado enquanto
 * permite acesso aos arquivos através deste endpoint.
 *
 * TODO: Migração futura para AWS S3 nativo
 * -----------------------------------------------------------------------------
 * Quando a aplicação escalar e houver condições financeiras, migrar para AWS S3
 * nativo que suporta ACLs por objeto (`public-read` individual). Benefícios:
 *
 * 1. Performance: URLs diretas para o S3, sem passar pela API (latência menor)
 * 2. Simplicidade: Remove a necessidade de proxy na API
 * 3. CDN: CloudFront na frente do S3 para cache global
 *
 * Para migrar:
 * - Remover este controller
 * - Implementar `makeFilePublic()` em storage.service.ts com ACLs S3
 * - Ajustar `getPublicUrl()` para retornar URLs diretas do S3
 * - Configurar bucket S3 com ACLs habilitadas
 * -----------------------------------------------------------------------------
 */
@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  /**
   * Serve arquivos do bucket privado via streaming.
   * Usa @Req() para extrair o path diretamente, evitando o bug do NestJS v11
   * onde o wildcard nomeado (*key) junta segmentos com vírgula em vez de barra.
   */
  @Get('*')
  async serveFile(@Req() req: Request, @Res() res: Response) {
    const key = req.path.replace(/^.*\/storage\//, '')
    await this.storageService.redirectToStorageFile(res, key)
  }
}