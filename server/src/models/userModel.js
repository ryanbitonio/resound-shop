import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
