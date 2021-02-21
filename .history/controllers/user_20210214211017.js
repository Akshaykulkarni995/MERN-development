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
        req.profile = user;
        next();
    });
};

exports.getUser = (req,res) => {
    //TODO getback for pass
    // salt value to keppt empty in response "" / undefined hides in response 
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.updatedAt = 
    return res.json(req.profile)
}