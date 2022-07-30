const User = require('../models/user');
const Category = require('../models/category');

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
    const chooser = req.body.data.categoryArray;
    const video = req.body.data.video
    user.categories[chooser].videos.push(video);
    user.save(function (err, user) {
      res.send(user);
    });
  });
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