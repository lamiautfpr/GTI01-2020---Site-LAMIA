import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const Swagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('API Portal LAMIA')
    .setDescription('LAMIA Portal v2 API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
};
