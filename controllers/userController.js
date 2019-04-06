const mongoose = require("mongoose");
const User = mongoose.model("User");
const promisify = require("es6-promisify");

exports.register = async (req, res, next) => {
  try {
    const user2 = await User.findOne({ username: req.body.username });
    if (user2) {
      next();
    } else {
      const user = new User({
        username: req.body.username
      });
      await user.save();
      // await register(user, req.body.password);
      next();
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

exports.getUserById = async id => {
  return await User.findById(id);
};
const model = require("mongoose").model;
const User = model("User");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

// exports.createUser = async (req, res) => {
//   try {
//     const user = new User(req.body);

//     await user.save();
//     res.send(200);
//   } catch (error) {
//     debugger;
//     console.log(error);
//     res.send(500);
//   }
// };

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
