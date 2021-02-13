
exports.signup = (req,res ) => {
    console.log("REQuest BODY", req.body);
    res.json({
        message : "Signup Works!"
    })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };