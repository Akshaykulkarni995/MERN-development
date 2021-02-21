//importing models
const User = require("../models/user") 

exports.getUserById = (req,res,next ,id){
    User.findById(id).exec((err,user) => {
if(err ||)
    });
}