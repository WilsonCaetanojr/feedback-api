import { NodemailerMail } from "./../adapters/nodemailer/nodemailerMail";
import { PrismaFeedbacks } from "./../repositories/prisma/feedback";
import { FeedbackServices } from "./../services/feedback";
import express from "express";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  try {
    const prismaFeedbackRepository = new PrismaFeedbacks();
    const nodemailerMail = new NodemailerMail();

    const service = new FeedbackServices(
      prismaFeedbackRepository,
      nodemailerMail
    );

    await service.create(req.body);

    res.status(200).send({ message: "Feedback salvo com sucesso." });
  } catch (error: any) {
    console.log(error);
    res.status(412).send({
      data: {},
      message: (error || "").toString(),
    });
  }
});
