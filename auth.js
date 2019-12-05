var db = require('./db/queries');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

passport.serializeUser(function(user, done) {
  // done(null, user.id);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  // Users.findById(obj, done);
  done(null, obj);
});

passport.use(
  new GoogleStrategy({
    clientID: '45895434842-7sil0jep8hvr8o44tbnfco6hcbsepbkk.apps.googleusercontent.com',
    clientSecret: 'vBAg8MbSck_4sA_i2iz8kE9H',
    callbackURL: "http://127.0.0.1:1337/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    // Query the database to find user record associated with this
    // google profile, then pass that object to done callback
    db.findUserById(profile.id).then(function(id) {
      if (id) {
        return done(null, profile);
      } else {
        db.createUser(profile.id)
          .then(function(id) {
            return done(null, profile);
          });
      }
    });
  })
);

module.exports = { passport };
