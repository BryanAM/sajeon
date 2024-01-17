import mongoose, { Schema } from "mongoose";

const WordSchema = new Schema({
  word: String,
  romaja: String,
  hanja: String,
  definitions: [String],
  pos: String,
  sentences: [Object],
});

export default mongoose.models.Word || mongoose.model("Word", WordSchema);
