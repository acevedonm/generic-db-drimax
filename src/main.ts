import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  //para acceder a un endpoint de la api seria:
  // /api/endpoint_Name
  await app.listen(AppModule.port);
}
bootstrap();
