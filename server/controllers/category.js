const User = require('../models/user');
const Category = require('../models/category');
const Video = require('../models/video');

//return specific category id 
exports.categoryId = function(req, res) {
  console.log('worked');
  const categoryId = {
    id: req.body.categoryId
  };
  res.send(categoryId);
};

//makes a new category for correct user
exports.newCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    console.log('WORKED');
    const cAtegory = new Category.CategoryModel({name: req.params.category});
    cAtegory.save(function (err, category) {
      user.categories.push(category);
      user.save(function (err, user) {
        res.send({
          category,
          category: user.category
        });
      });
    });
  })
}


// add video to correct category
exports.addVideoToCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    console.log('user success');
    const data = req.body.data.video
    const chooser = req.body.data.categoryArray;
    // console.log(data);
    const video = new Video.VideoModel(data);
    video.save(function(err, video){
      const addedVideo = video
      console.log(addedVideo);
      console.log('break');
      user.categories[chooser].videos.push(addedVideo);
      user.save(function (err, user) {
        console.log('success?');
        console.log(user.categories[chooser]);
      //   res.send({
      //     user
      //   })
      })
    })

  //   console.log('User Success');
  //   Category.CategoryModel.findOne({_id: req.body.data.id}, function (err, category) {
  //     console.log('category success');
  //     const data = req.body.data.video
  //     const videO = new Video.VideoModel(data);
  //     videO.save(function(err, video) {
  //       const updateCategory = category
  //       var item = user.categories.indexOf(name: 'new')

  //       // updateCategory.videos.push(video);
  //   //     console.log('category')
  //   //     console.log(category);
  //   //     category.save(function (err, category) {
  //   //       res.send(category);
  //   //     });
  //     });
  //   });
  // });
  })
};

//users categories
exports.getCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
    res.send({
      categories: user.categories,
      categoriesCount: user.categories.length
    });
  });
};