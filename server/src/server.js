import express from "express";

import "dotenv/config";
import helmet from "helmet";
import cors from "cors";

import { errorHandler } from "./middleware/errorMiddleware.js";
import cartRouter from "./routes/cartRoutes.js";

const PORT = process.env.PORT || 8000;

export const app = express();

app.use(
  cors({
    origin: process.env.PROD_RESOUND_SHOP_CLIENT || "http://localhost:5173",
  })
);

app.use(express.json());
app.use(helmet());

app.use("/cart", cartRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}...`);
});
