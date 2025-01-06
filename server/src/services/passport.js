import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/userModel.js";

import "dotenv/config";

const GOOGLE_OPTIONS = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${
    process.env.CLIENT_URL || "http://localhost:8000"
  }/auth/google/redirect`,
};

const verifyCallback = async (accessToken, refreshToken, profile, done) => {
  const {
    _json: { name, email: googleEmail, picture },
    id,
  } = profile;

  const userExists = await User.findOne({ socialId: id });

  if (userExists) {
    done(null, userExists);
  } else {
    const user = await User.create({
      socialId: id,
      name,
      email: googleEmail,
      picture,
      signinMethod: "google",
    });
    done(null, user);
  }
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(new GoogleStrategy(GOOGLE_OPTIONS, verifyCallback));
