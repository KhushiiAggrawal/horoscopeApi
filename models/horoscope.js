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

//added virtuals
const virtual = horoscopeSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

horoscopeSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.salt;
  },
});

export const horoscopeModel = mongoose.model("horosope", horoscopeSchema);
