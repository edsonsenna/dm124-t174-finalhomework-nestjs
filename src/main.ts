import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('DM124 - Final Homework')
    .setDescription('Author: Edson de Senna Junior')
    .setVersion('1.0')
    .addTag('deliveries')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('explorer', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
