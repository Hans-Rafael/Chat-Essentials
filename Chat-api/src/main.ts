import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule, } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* configuring and setting up Swagger documentation for NestJS
  application. */
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Chat Documentation')
    .setDescription('Documentation for the Live chat backend ')
    .setVersion('1.0')
    //.addTag('Live-Chat')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // se puede acceder a documentacion en:
  //http://localhost:3000/docs

  const PORT: number = 3000;
  //por securidad en produccion hide en .env PORT y no .log(port)
  app.enableCors();
  await app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`),
  );
  //() => console.log(`Server is running on port ${process.env.PORT}`));
}
bootstrap();
