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
