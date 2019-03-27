const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const bcrypt = require('bcrypt-nodejs');
const userSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.methods.encryptPassword = (password)=> {
return  bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password){
 return bcrypt.compareSync(password,this.password);
};

module.exports = model('User', userSchema);
