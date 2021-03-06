const { isEmpty } = require("lodash");
var mongoose = require("mongoose")


var  userSchema = new mongoose.Schema({
  name :{
    type : String,
    required : true,
    maxlength : 32,
    trim : true
  } ,
  lastname :{
    type : String,
    maxlength : 32,
    trim : true
  } ,
  email : {
      type : String,
      trim : true,
      unique : true,
      required : true
  },
  userinfo:{
      type : String,
      trim : true  
  },
  //TODO : comeback 
  encry_password : {
      type : String,
      required : true
  },
  salt : String,
  role : {
      type : Number,
      default : 0,
  },
purchases : {
type : Array,
default : []
}
});

userSchema.method = {
  securePassword: function(plainpassword){
if(!password) return "";


  }
}

module.exports = mongoose.model("User",userSchema)