import { google } from 'googleapis';
import { Injectable } from '@nestjs/common';
import { GoogleAuth, OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleDriveService {
  private auth: GoogleAuth;

  constructor() {
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    this.auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountKey),
      scopes: ['https://www.googleapis.com/auth/drive'],
    });
    
  }

  async getSheetEmails(): Promise<string[]> {
    const authClient = (await this.auth.getClient()) as OAuth2Client;
    const drive = google.drive({ version: 'v3', auth: authClient });

    const response = await drive.permissions.list({
      fileId: process.env.SHEET_ID,
      fields: 'permissions(emailAddress)',
    });

    if (!response.data.permissions) {
      throw new Error('Permissions not found');
    }

    return response.data.permissions.map((perm) => perm.emailAddress);
  }
}
