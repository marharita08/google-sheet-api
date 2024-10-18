import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SheetRow } from './sheet-row.entity';

@Injectable()
export class SheetRowsService {
  constructor(
    @InjectRepository(SheetRow)
    private sheetRowsRepository: Repository<SheetRow>,
  ) {}

  async save(columns: Record<string, string>) {
    const newRow = this.sheetRowsRepository.create({ columns });
    await this.sheetRowsRepository.save(newRow);
  }

  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsRepository.find();
  }

  async getById(id: number): Promise<SheetRow> {
    return await this.sheetRowsRepository.findOneBy({ id });
  }
}
