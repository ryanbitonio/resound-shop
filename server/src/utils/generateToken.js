import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

export default generateToken;
