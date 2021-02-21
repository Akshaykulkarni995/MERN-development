// controlling of req n resp
//importing models
const { request } = require("express");
const User = require("../models/user")
const Order = require("../models/order")

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


exports.getUser = (req, res) => {
    //TODO getback for pass
    // salt value to keppt empty in response "" / undefined hides in response 
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.updatedAt = undefined
    req.profile.createdAt = undefined
    return res.json(req.profile);
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "Not Authorised to update,not successful "
                });
            }
            user.salt = undefined
            user.encry_password = undefined
            user.updatedAt = undefined
            user.createdAt = undefined
            res.json(user)
        }
    )
}

exports.userPurchaseList = (req,res) => {
     Order.find({ user: req.profile._id })
     .populate("user", "_id name" )
     .exec( (err , order) => { 
        if(err){
            return res.status(400).json({
                error : "No Order In this account"
            })
        }
        return res.json(order)

     })

}

exports.pushOrderInPurchaseList = ( req ,res)






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

// fetch from model create api in controllers and provide url in routes