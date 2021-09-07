import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONSTANTS } from './utils';
import * as helmet from 'helmet';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(CONSTANTS.API_PREFIX);
  app.enableVersioning();
  app.enableCors();

  app.use(helmet());

  await app.listen(CONSTANTS.PORT);
}
bootstrap();
