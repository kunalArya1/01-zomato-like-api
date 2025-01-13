import { Schema, model } from "mongoose";
import addressModel from "./address.model.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    wishlist: {
      type: [String],
      default: [],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    addresses: [addressModel],
  },
  { timestamps: ture }
);

const User = model("User", userSchema);
export default User;
