
exports.signup = (req,res ) =>{
    console.log("Signup works");
};

exports.signout = (req,res) => {
    res.json({
        message : " User Signout"
    });
    };