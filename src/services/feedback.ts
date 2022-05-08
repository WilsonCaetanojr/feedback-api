import { MailAdapter } from "./../adapters/mainAdapter";
import { FeedbacksRepository } from "./../repositories/feedbakcRepository";

interface CreateFeedback {
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

    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Type is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/")) {
      throw new Error("Invalid screenshot format.");
    }

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
