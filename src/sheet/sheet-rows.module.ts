import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GoogleDriveModule } from 'src/google-drive/google.drive.module';
import { EmailModule } from 'src/email/email.module';

import { SheetRow } from './sheet-row.entity';
import { SheetRowsService } from './sheet-rows.service';
import { SheetRowsController } from './sheet-rows.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SheetRow]), GoogleDriveModule, EmailModule],
  providers: [SheetRowsService],
  controllers: [SheetRowsController],
})
export class SheetModule {}
