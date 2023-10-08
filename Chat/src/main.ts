import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* configuring and setting up Swagger documentation for NestJS
  application. */
  const config = new DocumentBuilder()
    .setTitle('Chat Documentation')
    .setDescription('Documentation for the Chat live backend ')
    .setVersion('1.0')
    .addTag('Chat')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(3000,
    () => console.log('Server is running on port 3000'));
  //() => console.log(`Server is running on port ${process.env.PORT}`));
}
bootstrap();
