import express from "express";

import "dotenv/config";
import helmet from "helmet";
import cors from "cors";

import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { mongoConnect } from "./services/mongo.js";

import cartRouter from "./routes/cartRoutes.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";

import passport from "passport";
import "./services/passport.js";
import cookieSession from "cookie-session";
import generateKey from "./utils/generateKey.js";

import ms from "ms";

const PORT = process.env.PORT || 8000;

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "user",
    maxAge: ms("1d"),
    keys: [generateKey(), generateKey()],
    sameSite: process.env.NODE_ENV === "production" ? "none" : lax,
    secure: process.env.NODE_ENV === "production",
  })
);

app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = cb => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = cb => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/cart", cartRouter);
app.use("/auth", authRouter);
app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
  });
}

startServer();
