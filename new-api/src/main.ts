import { NestFactory } from '@nestjs/core';
import { Swagger } from 'swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import uploadConfig from '@config/upload';
import { apiConfig } from '@config/api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(apiConfig.pathFileStatic, express.static(uploadConfig.uploadsFolder));
  Swagger(app);

  await app.listen(process.env.PORT_API);
}
bootstrap();
