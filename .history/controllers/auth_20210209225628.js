
exports.signup = (req,res ) => {
    console.log()
    res.json({
        message : "Signup Works!"
    })
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };