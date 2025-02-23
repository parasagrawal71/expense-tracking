import { NestFactory } from '@nestjs/core';
import { Logger, LoggerMiddleware } from '@packages/common';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT ?? 6001;

  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.useLogger(app.get(LoggerMiddleware));
  app.useGlobalPipes(new ValidationPipe());

  const logger = await app.resolve(Logger);
  await app.listen(PORT, () => {
    logger.info(`Listening at port ${PORT}/graphql`);
  });
}
bootstrap();
