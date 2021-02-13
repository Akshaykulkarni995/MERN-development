const { isEmpty } = require("lodash");
var mongoose = require("mongoose")
const crypto = require("crypto")
const { v4: uuidv = require('uuid');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  userinfo: {
    type: String,
    trim: true
  },
  //TODO : comeback 
  encry_password: {
    type: String,
    required: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: []
  }
});

//password encryption
userSchema.method = {
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      return crypto.createHmac('sha256', this.salt)
        .update('plainpassword')
        .digest('hex');

    } catch (err) {
      return "";
    }

  }
}

module.exports = mongoose.model("User", userSchema)