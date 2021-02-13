const User = require("../models/user");


exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {

        if (err) {
            return res.status(400).json({
                err: "Not able to save in db"
            })
        }

        res.json({
            name : 
        })
    });



    // console.log("REQUEST BODY", req.body);
    // res.json({
    //     message : "Signup Works!"
    // })
};

exports.signout = (req, res) => {
    res.json({
        message: " User Signout"
    });
};