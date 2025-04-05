import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jwt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // use in search
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true, // use in search
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatarUrl: {
      type: String, // used cloudinary service for avatar url
      required: true,
      default: "",
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.type.ObjectId,
        ref: "Video",
      },
    ],
    refreshToken: {
      type: String,
    },

    //extra properties
    // dateOfBirth: {
    //   type: Date,
    //   required: true,
    // },
    // phoneNumber: {
    //   type: String,
    //   default: "",
    // },
    // address: {
    //   type: String,
    //   default: "",
    // },
  },
  { timeseries: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  // generate access token here
  return jwt.sign(
    {
      _id: this.id, // id comes form db
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  // generate refresh token here
  return jwt.sign(
    {
      _id: this.id, // id comes form db
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model("User", userSchema);
