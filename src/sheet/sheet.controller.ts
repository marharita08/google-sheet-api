import { Controller, Post, Body } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheet')
export class SheetsController {
  constructor(
    private readonly sheetService: SheetService,
  ) {}

  @Post('save')
  async receiveData(@Body() columns: Record<string, string>): Promise<void> {
    await this.sheetService.saveSheetRow(columns);
  }
}
