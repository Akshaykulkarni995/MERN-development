//importing models
const { request, response } = require("express");
const User = require("../models/user")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user in db"
            })
        }
        request.profile = user;
        next();
    });
};

exports.getUser = (req,res) => {
    response.profile
}