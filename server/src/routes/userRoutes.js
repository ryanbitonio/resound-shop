import express from "express";
import {
  failedLogin,
  signinUser,
  signoutUser,
  signupUser,
  verifyEmail,
  verifyUser,
} from "../controllers/userController.js";

import limiter from "../utils/rateLimit.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", limiter, signinUser);
router.get("/signout", signoutUser);
router.get("/failure", failedLogin);
router.get("/signup/verify-email", verifyEmail);
router.get("/verify", protect, verifyUser);

export default router;
