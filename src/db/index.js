import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected Successfully 👍👌");
  } catch (error) {
    console.error("Error connecting to MongoDB!!:", error.message);
  }
};
export default connectDB;
