import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

export default generateToken;
