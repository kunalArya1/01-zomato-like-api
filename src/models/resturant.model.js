import mongoose, { Schema, model } from "mongoose";

const resturantShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: [String],
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  city: {
    type: String,
    required: true,
  },
  rating: {
    type: Schema.Types.ObjectId,
    ref: Reviews,
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: Menus,
  },
  avgRating: {
    type: Number,
    default: 0,
  },
});

export default model("Resturants", resturantShema);
