import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // App init
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  // Swagger init
  const options = new DocumentBuilder()
    .setTitle('Simple API Store')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  // App run
  await app.listen(process.env.APP_PORT);
}
bootstrap();
