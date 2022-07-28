const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Category = require('./controllers/category');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.get('/auth/current_user', Authentication.currentUser);
  app.post('/category:category', requireAuth, Category.newCategory);
  app.post('/category:category/add', Category.addToCategory);
  app.get('/category', Category.getCategory);
};