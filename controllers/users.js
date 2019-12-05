const express = require('express')
// const queries = require('../db/queries')
const router = express.Router()
const auth = require('../auth')

require('dotenv').config()

router.get('/', function(request, response) {
  response.render('index', { user: request.user });
});

router.get('/login', function(request, response) {
  response.render('login', { user: request.user });
});

router.get('/auth/google',
  auth.passport.authenticate('google', { scope: ['openid email profile'] }));

router.get('/auth/google/callback',
  auth.passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function(request, response) {
    // Authenticated successfully
    response.redirect('/');
  });

router.get('/logout', function(request, response) {
  request.logout();
  response.redirect('/');
});

function ensureAuthenticated(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/login');
}

module.exports = router;