import { prisma } from "./../../prisma";
import {
  FeedbacksRepository,
  FeedbackCreateData,
} from "./../feedbakcRepository";

export class PrismaFeedbacks implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
  }
}
