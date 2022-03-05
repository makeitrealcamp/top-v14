import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.EMAIL_HOST);
const transporter = nodemailer.createTransport({
  host: `${process.env.EMAIL_HOST}`,
  port: parseInt(`${process.env.EMAIL_PORT}`),
  auth: {
    user: `${process.env.SENDER_EMAIL}`,
    pass: `${process.env.SENDER_PASSWORD}`,
  },
  secure: true,
  tls: {
    ciphers: 'SSLv3',
  },
});

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   tls: {
//     ciphers: 'SSLv3',
//   },
//   auth: {
//     user: 'forest.maggio3@ethereal.email',
//     pass: 'Y2RAhVGA3gTSN6YN67',
//   },
//   secure: true,
// });

// Message object

export const sendEmailServiceNodeMailer = async (
  recipient: string,
  subject: string,
  link?: string
) => {
  console.log(process.env.EMAIL_HOST);
  console.log(process.env.SENDER_EMAIL);
  console.log(recipient);
  let message = {
    from: `Sender Name <${process.env.SENDER_EMAIL}>`,
    to: `Recipient <${process.env.SENDER_EMAIL}>`,
    subject: `${subject}`,
    text: 'Hello to myself!',
    html: `<p><b>Hello</b> to myself!</p> ${link ? '<a>' + link + '</a>' : ''}`,
  };
  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
};
