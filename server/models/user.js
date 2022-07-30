const mongoose = require('mongoose');
const Category = require('./category');
const Schema = mongoose.Schema;
var crypto = require('crypto');

const UserSchema = new Schema ({
  email: { type: String, unique: true, lowercase: true },
  hash: String,
  salt: String,
  categories: [{type: Category.CategorySchema}]
});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;