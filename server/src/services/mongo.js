import mongoose from "mongoose";
import "dotenv/config";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", err => {
  console.error(err);
});

export const mongoConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DEV_MONGODB_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export const mongoDisconnect = async () => {
  await mongoose.disconnect();
};
