exports.videoId = function(req, res) {
  const videoId = {id: req.body.videoId};
  res.send(videoId);
};