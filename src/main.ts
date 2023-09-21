import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(port);
}

bootstrap();
