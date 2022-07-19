const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Video = require('./video');

const categorySchema = new Schema ({
  name: String,
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }]
});

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = {
  CategoryModel,
  CategorySchema: categorySchema
}