const passport = require('passport');
const localStrategy= require('passport-local').Strategy;
const User = require('../models/User')

passport.serializeUser((user,done) =>{
    done(null,user.id);
});

passport.deserializeUser(async (id,done) =>{
   const user = await User.findById(id);
   done(null, user);
});


passport.use('local-signup', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback:true
},async (req,username, password, done)=>{
    const user = new User();
    user.user = username;
    user.password = user.encryptPassword(password);
    await user.save();
    done(null, user);
}));

passport.use('local-signin', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    const user = await User.findOne({'user': username});
    if(!user) {
     return done(null, false, req.flash('signinMessage', 'No User Found'));
    }
    if(!user.validatePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    console.log('Correcto ');
  return done(null, user);
  }));