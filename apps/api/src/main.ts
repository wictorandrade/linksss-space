import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // CORS
  app.enableCors({
    origin: [
      'http://localhost:3002',
      'http://localhost:3000',
      'https://linksss.space',
    ],
    credentials: true,
  })

  // API prefix
  app.setGlobalPrefix('api')

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Linksss Space API')
    .setDescription('API para o clone do Linktree - Linksss Space')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  const configService = app.get(ConfigService)
  const port = configService.get('PORT', 5000)

  await app.listen(port)
  console.log(`🚀 API running on http://localhost:${port}`)
  console.log(`📚 Docs available at http://localhost:${port}/docs`)
}

bootstrap()