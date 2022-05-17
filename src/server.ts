import express from "express";
import { routes as feedbacks } from "./routes/feedbacks";
import { routes as health } from "./routes/health";

const app = express();

app.use(express.json());
app.use(feedbacks);
app.use(health);

app.listen(process.env.PORT || 3333, () => console.log("Server running."));
