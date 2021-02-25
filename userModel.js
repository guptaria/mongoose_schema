const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "password is Required",
    min:[6,"Too Short"]
  },
  email:{
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique:true
  },
  userCreated:{
    type: Date,
    default:Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
