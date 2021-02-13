
exports.signup = (req,res ) => {
    console.log("REQUEST BODY", re)
    res.json({
        message : "Signup Works!"
    })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };