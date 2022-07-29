const User = require('../models/user');
const Category = require('../models/category');
const Video = require('../models/video');

// making new category
// exports.newCategory = function(req, res) {
//   console.log(req.user);
//   const category = new Category.CategoryModel(req.body.category);
//   category.name = req.params.category;
//   category.save((err) => {
//     if (err) throw err;
//   });
//   return res.send(category);
// };

exports.newCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    console.log('WORKED!!!');
    const cAtegory = new Category.CategoryModel({name: req.params.category});
    cAtegory.save(function (err, category) {
      user.categories.push(category);
      console.log('ppushed')
      console.log(user)
      user.save(function (err, user) {
        res.send({
          category,
          category: user.category
        });
      });
    });
  })
}

exports.addVideoToCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    console.log('User Success');
    console.log(req.body)
    Category.CategoryModel.findOne({_id: req.body.id}, function (err, category) {
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
  })
}

//users categories
exports.getCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    res.send({
      categories: user.categories,
      categoriesCount: user.categories.length
    });
  });
};