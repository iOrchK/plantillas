import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // App init
  const app = await NestFactory.create(AppModule);
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

  await app.listen(3001);
}
bootstrap();
