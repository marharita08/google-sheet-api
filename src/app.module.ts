import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SheetModule } from './sheet/sheet-rows.module';
import { AppDataSource } from './ormconfig';
import { LoggingInterceptor } from './logging/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SheetModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },],
})
export class AppModule {}
