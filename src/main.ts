import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('APP_PORT');
  await app.listen(port || 3000, () => {
    console.log(`App has beed started on ${port} port`);
  });
}

bootstrap();
