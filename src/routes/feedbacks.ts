import { NodemailerMail } from "./../adapters/nodemailer/nodemailerMail";
import { PrismaFeedbacks } from "./../repositories/prisma/feedback";
import { FeedbackServices } from "./../services/feedback";
import { prisma } from "./../prisma";
import express from "express";
import nodemailer from "nodemailer";

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
  } catch (error) {
    console.log(error);
    res.status(412).send({
      data: {},
      message: "Falha ao salvar feedback",
    });
  }
});
