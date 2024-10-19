import { google } from 'googleapis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleDriveService {
  private drive = google.drive({ version: 'v3', auth: process.env.GOOGLE_API_KEY });

  async getSheetEmails(): Promise<string[]> {
    const response = await this.drive.permissions.list({
      fileId: process.env.SHEET_ID,
      fields: 'permissions(emailAddress)',
    });

    return response.data.permissions.map((perm) => perm.emailAddress);
  }
}
