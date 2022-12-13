import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Pulsar API')
    .setDescription('Backend utility for managing packages and users in the ecosystem.')
    .setVersion('1.0-SNAPSHOT')
    .setExternalDoc('Package Frontend', 'https://web.pulsar-edit.dev')
    .setLicense('MIT', 'https://github.com/pulsar-edit/pulsar/blob/master/LICENSE.md')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document); // Empty quotes to specify URL path
  
  await app.listen(3000);
}
bootstrap();
