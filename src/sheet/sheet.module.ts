import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SheetRow } from './sheet-row.entity';
import { SheetService } from './sheet.service';

@Module({
  imports: [TypeOrmModule.forFeature([SheetRow])],
  providers: [SheetService]
})
export class SheetModule {}
