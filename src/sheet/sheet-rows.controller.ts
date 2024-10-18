import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { SheetRowsService } from './sheet-rows.service';
import { SheetRow } from './sheet-row.entity';
import { Log } from 'src/logging/log.decorator';

@Controller('sheet-rows')
export class SheetRowsController {
  constructor(private readonly sheetRowsService: SheetRowsService) {}

  @Post()
  @Log()
  async save(@Body() columns: Record<string, string>): Promise<void> {
    await this.sheetRowsService.save(columns);
  }

  @Get()
  @Log()
  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsService.getAll();
  }

  @Get(':id')
  @Log()
  async getById(@Param('id') id: number): Promise<SheetRow> {
    return await this.sheetRowsService.getById(id);
  }
}
