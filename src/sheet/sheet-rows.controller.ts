import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { SheetRowsService } from './sheet-rows.service';
import { SheetRow } from './sheet-row.entity';

@Controller('sheet-rows')
export class SheetRowsController {
  constructor(private readonly sheetRowsService: SheetRowsService) {}

  @Post()
  async save(@Body() columns: Record<string, string>): Promise<void> {
    await this.sheetRowsService.save(columns);
  }

  @Get()
  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<SheetRow> {
    return await this.sheetRowsService.getById(id);
  }
}
