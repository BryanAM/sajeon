import mongoose, { Schema } from "mongoose";

const WordSchema = new Schema({
  word: String,
  romaja: String,
  hanja: String,
  definitions: [String],
  pos: String,
  sentences: [Object],
});

const TestSchema = new Schema({
  ID: Number,
  word: String,
  romaja: String,
  hanja: String,
  definitions: [String],
  pos: String,
  sentences: [Object],
});

const TestModel = mongoose.model('Test', TestSchema, 'testDB');

// Creating a text index for all fields
Object.keys(WordSchema.paths).forEach(function (path) {
  if (WordSchema.paths[path].instance === "String") {
    WordSchema.path(path).index({ text: true });
  }
});

const exportTestModule = mongoose.models.Test || TestModel;
const exportProdModule = mongoose.models.Word || mongoose.model("Word", WordSchema);

const modelToExport = process.env.NODE_ENV === "test" 
  ? exportTestModule 
  : exportProdModule;


export default exportProdModule;