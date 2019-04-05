const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const promisify = require("es6-promisify");

exports.login = passport.authenticate("local");

exports.logout = (req, res) => {
  req.logout();
};

exports.isLoggedIn = (req, res, next) => {
  console.log(req);
  if (req.isAuthenticated()) {
    next();
    return 500;
  }
  console.log("You are not logged in");
};
