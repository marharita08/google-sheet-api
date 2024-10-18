import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { SheetModule } from './sheet/sheet-rows.module';
import { AppDataSource } from './ormconfig';
import { LoggingInterceptor } from './logging/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SheetModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
