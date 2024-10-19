import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EmailService } from 'src/email/email.service';
import { GoogleDriveService } from 'src/google-drive/google-drive.service';
import { SheetNotification } from 'src/enums/enums';

import { SheetRow } from './sheet-row.entity';

@Injectable()
export class SheetRowsService {
  constructor(
    @InjectRepository(SheetRow)
    private sheetRowsRepository: Repository<SheetRow>,
    private readonly googleDriveService: GoogleDriveService,
    private readonly emailService: EmailService,
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
      const rowCount = await this.sheetRowsRepository.count();
      if (rowCount % 10 === 0) {
        const emails = await this.googleDriveService.getSheetEmails();
        const filteredEmails = emails.filter(email => !email.includes(process.env.SERVICE_EMAIL))
        await this.emailService.sendEmail(filteredEmails, SheetNotification.SUBJECT, SheetNotification.MESSAGE);
      }
    }
  }

  async getAll(): Promise<SheetRow[]> {
    return await this.sheetRowsRepository.find();
  }

  async getById(id: number): Promise<SheetRow> {
    return await this.sheetRowsRepository.findOneBy({ id });
  }
}
