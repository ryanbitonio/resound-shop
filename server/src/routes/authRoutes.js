import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

export default router;
