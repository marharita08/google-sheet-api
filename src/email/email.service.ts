import * as sgMail from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(recipients: string[], subject: string, message: string) {
    const msg = {
      to: recipients,
      from: process.env.EMAIL,
      subject,
      text: message,
    };
    await sgMail.sendMultiple(msg);
  }
}
