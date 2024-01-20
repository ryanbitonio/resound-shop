import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/userController.js";

import limiter from "../utils/rateLimit.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", limiter, loginUser);
router.get("/logout", logoutUser);

export default router;
