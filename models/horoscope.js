import mongoose from "mongoose";

const horoscopeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    unique: true,
    required: true,
  }
});
export const horoscopeModel = mongoose.model("horoscope", horoscopeSchema);
