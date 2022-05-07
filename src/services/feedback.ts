import { MailAdapter } from "./../adapters/mainAdapter";
import { FeedbacksRepository } from "./../repositories/feedbakcRepository";

interface CreateFeedback {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export class FeedbackServices {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async create(body: CreateFeedback) {
    const { type, comment, screenshot } = body;

    this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<p>Tipo  do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
      ].join("\n"),
    });
    return await this.feedbacksRepository.create({ type, comment, screenshot });
  }
}
