// controlling of req n resp
//importing models
const { request } = require("express");
const User = require("../models/user")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user in db"
            })
        }
        // setting user data in profile
        req.profile = user;
        next();
    });
};


exports.getUser = (req,res) => {
    //TODO getback for pass
    // salt value to keppt empty in response "" / undefined hides in response 
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.updatedAt = undefined
    req.profile.createdAt = undefined
    return res.json(req.profile);
}


exports.updateUser = (req,res) => {

    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set: req.body},
        {new : true, useFindAndModify : false},
        (err,user) => {
            if(err || !user)
        }



    )



}

// exports.getAllUsers = ( req,res) => {
//     User.find().exec((err,users) => {
//         if(err || !users){
//             return res.status(400).json({
//                 error: "No Users"
//             })
//         }
//         //to recv the response from api 
//         res.json(users);
//     })
// }