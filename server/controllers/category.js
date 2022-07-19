const User = require('../models/user');
const Category = require('../models/category');
const Video = require('../models/video');

//making new category
exports.newCategory = function(req, res) {
  const category = new Category.CategoryModel(req.body.category);
  category.name = req.params.category;
  category.save((err) => {
    if (err) throw err;
  });
  return res.send(category);
};

// exports.NewCategory = function(req, res) {
//   User.findOne({_id: req.user._id}, function (err, user) {
//     const category = new Category.CategoryModel(req.body.category);
//     category.name = req.params.category;
//     category.save((err) => {
//       if (err) throw err;
//     });
//     return res.send(category);
//   })
// }


//adding video to category
exports.addToCategory = function(req, res) {
  Category.CategoryModel.findOne({name: req.params.category}, function (err, category) {
    const video = new Video.VideoModel(req.body.video);

    video.save(function(err, video) {
      category.videos.push(video);

      category.save(function (err, category) {
        res.send({
          video,
          videoListCount: category.videos.length
        });
      })
    })
  })
}

// exports.AddToCategory = function(req, res) {
//   User.findOne({_id: req.user._id}, function (err, user) {
//     Category.CategoryModel.findOne({name: req.params.category}, function (err, category) {
//       const video = new Video.VideoModel(req.body.video);
  
//       video.save(function(err, video) {
//         category.videos.push(video);
  
//         category.save(function (err, category) {
//           res.send({
//             video,
//             videoListCount: category.videos.length
//           });
//         })
//       })
//     })
//   })
// }

//users categories
exports.getCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    res.send({
      categories: user.categories,
      categoriesCount: user.categories.length
    });
  });
};