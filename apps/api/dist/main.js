"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const isDev = process.env.NODE_ENV === 'development';
    const globalPrefix = isDev ? 'linksss/v1/dev' : 'linksss/v1';
    app.setGlobalPrefix(globalPrefix);
    const configService = app.get(config_1.ConfigService);
    const port = configService.getOrThrow('port');
    const corsOrigin = configService.getOrThrow('corsOrigin');
    app.enableCors({
        origin: corsOrigin,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    const host = '0.0.0.0';
    await app.listen(port, host);
    common_1.Logger.log(`Application is running on: http://${host}:${port}/${globalPrefix}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map