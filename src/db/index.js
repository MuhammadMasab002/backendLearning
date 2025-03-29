// import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, { serverSelectionTimeoutMS: 5000 });
//     console.log(`MongoDB connected Successfully 👍👌`);
//   } catch (error) {
//     console.log(`Error :: ${error}`);
//   }
// };
// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log("uri", process.env.MONGODB_URI, DB_NAME);

  try {
    // Connect to MongoDB and connect to the database
    // const connectionInstance =
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected Successfully 👍👌`);

    // console.log(
    //   `\nConnected to MongoDB successfully !! HOST NAME: ${connectionInstance.connection.host}`
    // );
  } catch (error) {
    console.error("Error connecting to MongoDB!!:", error.message);
    process.exit(1);
  }
};

export default connectDB;
