import { Resend } from 'resend';
import { getEmailBody } from '@/lib/email';

const resend = new Resend(import.meta.env.RESEND_TOKEN);

export const sendEmail = async(from: string, to: string, subject: string, confirmed: boolean) => {
    resend.emails.send({
        from,
        to,
        subject,
        html: getEmailBody(to, confirmed)
      });
}
