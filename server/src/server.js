import express from "express";

import "dotenv/config";
import helmet from "helmet";
import cors from "cors";

import { errorHandler } from "./middleware/errorMiddleware.js";
import { mongoConnect } from "./services/mongo.js";

import cartRouter from "./routes/cartRoutes.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 8000;

export const app = express();

app.use(
  cors({
    origin: process.env.PROD_RESOUND_SHOP_CLIENT || "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
  });
}

startServer();
