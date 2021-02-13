
exports.signup = (req,res ) => {
    console.log("REQUEST BODY", req.b)
    res.json({
        message : "Signup Works!"
    })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };