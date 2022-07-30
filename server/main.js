const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Category = require('./controllers/category');
const Video = require('./controllers/video')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.get('/auth/current_user', requireAuth, Authentication.currentUser);
  app.post('/category:category', requireAuth, Category.newCategory);
  app.post('/video', requireAuth, Category.addVideoToCategory);
  app.post('/videoId', Video.videoId);
  app.post('/category', requireAuth, Category.categoryId)
};