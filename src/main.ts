import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const logger = new Logger();
  //El siguiente middleware es la capa de validaciones, nos permite utilizar decorators de validacion en los dtos
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(AppModule.port);
  logger.log(`Server is running in port: ${AppModule.port}`);
}
bootstrap();
