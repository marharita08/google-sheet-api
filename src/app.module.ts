import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigs } from './configs/typeorm.cofigs';
import { SheetModule } from './sheet/sheet.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfigs), SheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
