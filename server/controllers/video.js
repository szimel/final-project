const User = require('../models/user');
const Category = require('../models/category');
const Video = require('../models/video');

exports.videoId = function(req, res) {
  const videoId = {id: req.body.videoId};
  res.send(videoId);
}