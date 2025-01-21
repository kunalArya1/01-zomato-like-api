import { Schema, model } from "mongoose";
import addressModel from "./address.model.js";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return next();
  }
  const hashpassword = await bcrypt.hash(this.password);
  this.password = hashpassword;
  next();
});

userSchema.methods.isPasswordCorrect = function (userGivenPassword) {
  return bcrypt.compare(userGivenPassword, this.password);
};

const User = model("User", userSchema);
export default User;
