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
  password : {
      type : String,
      trim : true,
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

module.exports = mongoose.model("")