const User = require("../models/user");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');



exports.signup = (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    user.save((err, user) => {

        if (err) {
            return res.status(400).json({
                err: "Not able to save in db"
            })
        }

        res.json({
            name: user.name,
            email: user.email,
            id: user._id,

        })
    });



    // console.log("REQUEST BODY", req.body);
    // res.json({
    //     message : "Signup Works!"
    // })
};

exports.signin = (req, res) => {
    //destructing
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(400).json({
                error: "User email id not found"
            })
        }


        if (!user.autheticate(password)) {

            return res.status(401).json({
                error: "Email and pass do not match"
            })
        }

//creating new token 
        const token = jwt.signin


    })

};

exports.signout = (req, res) => {
    res.json({
        message: " User Signout"
    });
};

  