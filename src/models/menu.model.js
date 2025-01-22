import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
  menuName: {
    type: String,
    required: true,
  },
  price: {
    type: Stirng,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isVeg: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.model("Menus", menuSchema);
