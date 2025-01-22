import mongoose, { Schema } from "mongoose";

const AddressShema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    minlength: 6,
    maxlength: 6,
  },
});

export default mongoose.model("Address", AddressShema);
