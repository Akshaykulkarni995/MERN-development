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
  //TODO : comeback 
  password : {
      type : String,
      trim : true,
      required : true
  },
  salt : String,
  role : {
      
  }
});