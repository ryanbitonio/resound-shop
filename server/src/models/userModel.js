import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
  },
  signinMethod: { type: String },
  socialId: { type: String },
  password: { type: String },
  picture: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
