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
  // console.log(req);
  console.log(User.findOne({}))
  console.log(User.users)
  console.log(User.collection.user)


  // User.findOne({_id: req.user._id}, function (err, user) {

  //   const category = new Category.CategoryModel(req.body.category);
  //   // console.log(User.collection.collections)
  //   category.name = req.params.category;
  //   category.save(function (err, category) {
  //     console.log(user)
  //     user.categories.push(category);

  //     user.save(function (err, user) {
  //       res.send({
  //         category,
  //         category: user.categories
  //       });
  //     });
  //   });
  // })
}


//adding video to category
// exports.addToCategory = function(req, res) {
//   Category.CategoryModel.findOne({name: req.params.category}, function (err, category) {
//     const video = new Video.VideoModel(req.body.video);

//     video.save(function(err, video) {
//       category.videos.push(video);

//       category.save(function (err, category) {
//         res.send({
//           video,
//           videoListCount: category.videos.length
//         });
//       })
//     })
//   })
// }

exports.addToCategory = function(req, res) {
  User.findOne({_id: req.user._id}, function (err, user) {
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