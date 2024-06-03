import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  // app.use(LoggerMiddleware);

  const config = new DocumentBuilder()
    .setTitle('Base MicroService')
    .setDescription('API Base para Microserviços')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
