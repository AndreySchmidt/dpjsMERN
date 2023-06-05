import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      uniqe: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId, // ссылка на другую таблицу
        ref: "Post", // тут название таблы, на которую ссылаемся
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
