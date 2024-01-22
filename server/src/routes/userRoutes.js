import express from "express";
import {
  failedLogin,
  signinUser,
  signoutUser,
  signupUser,
} from "../controllers/userController.js";

import limiter from "../utils/rateLimit.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", limiter, signinUser);
router.get("/signout", signoutUser);
router.get("/failure", failedLogin);

export default router;
