import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  followRequests: [String],
  followers: [String],
  following: [String],
  followingRequests: [String],
  likeCount: {
    type: Number,
  },
  phone: String,
  posts: {
    type: [Object],
  },
  profilePhoto: String,
  rewards: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
