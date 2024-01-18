import mongoose, { Schema } from "mongoose";

const WordSchema = new Schema({
  word: String,
  romaja: String,
  hanja: String,
  definitions: [String],
  pos: String,
  sentences: [Object],
});

// Creating a text index for all fields
Object.keys(WordSchema.paths).forEach(function (path) {
  if (WordSchema.paths[path].instance === "String") {
    WordSchema.path(path).index({ text: true });
  }
});

export default mongoose.models.Word || mongoose.model("Word", WordSchema);
