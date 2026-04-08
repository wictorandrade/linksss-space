import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const isDev = process.env.NODE_ENV === 'development'
  const globalPrefix = isDev ? 'linksss/v1/dev' : 'linksss/v1'
  app.setGlobalPrefix(globalPrefix)

  const configService = app.get(ConfigService)
  const port = configService.getOrThrow<number>('port')
  const corsOrigin = configService.getOrThrow<string[]>('corsOrigin')

  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )

  const host = '0.0.0.0'

  await app.listen(port, host)
  Logger.log(
    `Application is running on: http://${host}:${port}/${globalPrefix}`,
    'Bootstrap',
  )
}

bootstrap()