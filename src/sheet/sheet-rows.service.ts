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

  async save(id: number, columns: Record<string, string>) {
    const existingRow = await this.sheetRowsRepository.findOne({
      where: { id },
    });

    if (existingRow) {
      existingRow.columns = columns;
      await this.sheetRowsRepository.save(existingRow);
    } else {
      const newRow = this.sheetRowsRepository.create({ id, columns });
      await this.sheetRowsRepository.save(newRow);
    }
  }

  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsRepository.find();
  }

  async getById(id: number): Promise<SheetRow> {
    return await this.sheetRowsRepository.findOneBy({ id });
  }
}
