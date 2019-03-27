const router = require('express').Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.get('/', userController.getUser);

router.post('/signup', passport.authenticate('local-signup', {
  //  successRedirect: '/',
  //  failureRedirect: '/signup',
  //  failureFlash: true
 })); 
 
 router.post('/signin', passport.authenticate('local-signin', {
  // successRedirect: '/profile',
  // failureRedirect: '/signin',
  failureFlash: true
}));

//Exports
module.exports = router;


