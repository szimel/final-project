const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Video = require('./video');

const CategorySchema = new Schema ({
  name: String,
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }]
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = {
  CategoryModel,
  CategorySchema: CategorySchema
}