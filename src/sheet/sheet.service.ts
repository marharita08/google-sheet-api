import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SheetRow } from './sheet-row.entity';

@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(SheetRow)
    private sheetRowRepository: Repository<SheetRow>,
  ) {}

  async saveSheetRow(columns: Record<string, string>) {
    const newRow = this.sheetRowRepository.create({ columns });
    await this.sheetRowRepository.save(newRow);
  }
}
