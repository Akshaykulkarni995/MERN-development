const { isEmpty } = require("lodash");
var mongoose = require("mongoose")
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

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

userSchema.virtual("password")
  .set(function (password) {
    this._password = password
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password)
  })
  .get(function () {
    return this._password
  })

//password encryption
userSchema.method = {


autheticate 


  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      //encrypting pass using crypto n salt 
      return crypto.createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');

    } catch (err) {
      return "";
    }

  }
}

module.exports = mongoose.model("User", userSchema)