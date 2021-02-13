
exports.signup = (req,res ) => {
    console.log("REQUEST BODY", req.)
    res.json({
        message : "Signup Works!"
    })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };