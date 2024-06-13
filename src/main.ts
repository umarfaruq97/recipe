import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // use DocumentBuilder to create a new Swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('Recipes API')
    .setDescription('Recipes API description')
    .setVersion('0.1')
    .build();
  // create a swagger document using the application instance and the document configuration
  const document = SwaggerModule.createDocument(app, config);
  // setup swagger module with the application instance and the swagger document
  SwaggerModule.setup('api', app, document);
  // start the app and listen for request on port 3000
  await app.listen(3000);
}
bootstrap();
