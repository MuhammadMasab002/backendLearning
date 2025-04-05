import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoFile: {
      type: String, // cloudinary url for video
      required: true,
    },
    thumbnailUrl: {
      type: String, // cloudinary url for video
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },

    // extra properties-----------
    // likes: {
    //   type: Number,
    //   default: 0,
    // },
    // dislikes: {
    //   type: Number,
    //   default: 0,
    // },
    // comments: [
    //   {
    //     user: {
    //       type: Schema.Types.ObjectId,
    //       ref: "User",
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);


export const Video = mongoose.model("Video", videoSchema);
