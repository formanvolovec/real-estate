import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Booking estate')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  app.use(cookieParser());
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
