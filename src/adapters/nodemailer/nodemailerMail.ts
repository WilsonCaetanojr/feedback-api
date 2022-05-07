import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./../mainAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ae40aa43016e37",
    pass: "9118de063b8f59",
  },
});

export class NodemailerMail implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: "Equipe Feedback <oi@feedback.com>",
      to: "Wilson Caetano <wilson@feedback.com>",
      subject: "Novo feedback",
      html: body,
    });
  }
}
