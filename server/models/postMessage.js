import mongoose from "mongoose";

// each post will have to have the follow schema makeup

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// exporting a mongoose model from the PostMessage file
// and later on that file run commands find, create, delete, update

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
