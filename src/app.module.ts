import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SheetModule } from './sheet/sheet-rows.module';
import { AppDataSource } from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
