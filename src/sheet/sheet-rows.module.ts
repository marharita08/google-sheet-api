import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SheetRow } from './sheet-row.entity';
import { SheetRowsService } from './sheet-rows.service';
import { SheetRowsController } from './sheet-rows.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SheetRow])],
  providers: [SheetRowsService],
  controllers: [SheetRowsController],
})
export class SheetModule {}
