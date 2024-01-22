import crypto from "crypto";

const generateKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

export default generateKey;
