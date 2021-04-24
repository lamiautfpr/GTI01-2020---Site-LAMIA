import { NestFactory } from '@nestjs/core';
import { Swagger } from 'swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Swagger(app);

  await app.listen(process.env.PORT_API);
}
bootstrap();
