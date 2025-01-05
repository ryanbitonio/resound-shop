import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { Resend } from "resend";
import User from "../models/userModel.js";
import { generateSecureNumericOTP } from "../utils/generateOTP.js";
import generateToken from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashedPassword,
    signinMethod: "personal",
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

export const signinUser = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (
    userExists &&
    userExists.signinMethod === "personal" &&
    (await userExists.matchPassword(password))
  ) {
    res.json({
      _id: userExists.id,
      email: userExists.email,
      token: generateToken(userExists._id),
    });
  } else if (userExists && userExists.signinMethod === "google") {
    res.status(401).json({
      message: "The verification strategy is not valid for this account",
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

export const signoutUser = (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173/signin");
  });
};

export const failedLogin = (req, res) => {
  res.json({
    error: "Failed to log in",
  });
};

export const verifyEmail = async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const verifyEmail = path.join(
    "C:/Users/Mary Joy/Desktop/Projects/resound-shop/server/src/views",
    "verifyEmail.html"
  );
  let html = fs.readFileSync(verifyEmail, "utf8");
  const otp = generateSecureNumericOTP();
  html = html.replace("{{otp}}", otp);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ryanbitonio.ayang@gmail.com",
    subject: `Your OTP is ${otp}`,
    html: html,
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
};

export const verifyUser = (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).json({ message: "Not authorized" });
  }
};
