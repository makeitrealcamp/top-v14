import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export const sendEmailServiceSendGrid = async (
  recipient: string,
  subject: string,
  link?: string
): Promise<unknown> => {
  const msg = {
    to: `${recipient}`,
    from: `${process.env.VALID_EMAIL}`, // Use the email address or domain you verified above
    subject: `${subject}`,
    text: 'Hello to myself!',
    html: `<p><b>Hello</b> to myself!</p> ${link ? '<a>' + link + '</a>' : ''}`,
  };
  try {
    return await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
