import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Connect to MongoDB and connect to the database
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected Successfully 👍👌`);

    console.log(
      `\nConnected to MongoDB successfully !! HOST NAME: ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB!!:", error.message);
    process.exit(1);
  }
};

export default connectDB;
