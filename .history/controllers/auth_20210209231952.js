const User = require("../models/user");


exports.signup = (req,res ) => {
    const user = new User(req.body);
    user.save



    // console.log("REQUEST BODY", req.body);
    // res.json({
    //     message : "Signup Works!"
    // })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };