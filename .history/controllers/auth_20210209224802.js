
exports.signup = (req,res ) => {
    console.log("Signupworks");
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };