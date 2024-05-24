import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { validateEnv } from './utils/env.validator';

async function bootstrap() {
  const { PORT } = validateEnv();

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('HARMONY Backend API Documentation')
    .setDescription(' API description')
    .setVersion('1.0')
    .addServer('http://localhost:5000/', 'Local environment')
    .addTag('IOT')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT); // Use the port from .env or default to 3000
}

bootstrap();
