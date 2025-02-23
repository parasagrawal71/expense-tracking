import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, LoggerMiddleware } from '@packages/common';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from './config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function setupSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(config.APP_NAME)
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: 'Enter JWT token',
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrap() {
  const PORT = process.env.PORT ?? 5100;

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.enableShutdownHooks();
  app.useLogger(app.get(LoggerMiddleware));
  app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);

  const logger = await app.resolve(Logger);
  await app.listen(PORT, () => {
    logger.info(`Listening at port ${PORT}`);
  });
}
bootstrap();
