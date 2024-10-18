import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { AppDataSource } from './ormconfig';

async function bootstrap() {
  dotenv.config();
  await AppDataSource.initialize();
  await AppDataSource.runMigrations();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
