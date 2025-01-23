import { model, Schema } from "mongoose";
import User from "./user.models";

const reviewModles = Schema({
  rating: {
    type: Number,
    maxlength: 6,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: User,
  },
  
});

export default model("Reviews", reviewModles);
