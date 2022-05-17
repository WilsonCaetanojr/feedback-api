import express from "express";

export const routes = express.Router();

routes.post("/health", async (req, res) => {
  res.status(200).send({ message: "OK" });
});
