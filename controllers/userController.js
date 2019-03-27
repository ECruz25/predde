const model = require('mongoose').model;
const User = model('User');
const passport = require('passport');
const localStrategy= require('passport-local').Strategy;


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

