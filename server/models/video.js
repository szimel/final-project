const mongoose = require("mongoose");
const Category = require("./category");
const Schema = mongoose.Schema;

const videoSchema = new Schema ({
  title: String,
  thumbnail: String,
  url: String
});

// module.exports = mongoose.model("Video", videoSchema);

const VideoModel = mongoose.model("Video", videoSchema);

module.exports = {
  VideoModel,
  VideoSchema: videoSchema
};
