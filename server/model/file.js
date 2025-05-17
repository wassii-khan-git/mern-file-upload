import mongoose from "mongoose";

const FileSchema = mongoose.Schema({
  filename: String,
  path: String,
  originalname: String,
});
export const FileModel = mongoose.model('File', FileSchema);
