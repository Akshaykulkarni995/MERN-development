// // const { Router } = require("express");
// // var express = require("express");
// // // const { sign } = require("jsonwebtoken");
// // var router = express.Router();

// // //get auth from controller
// // const { check, validationResult } = require('express-validator');
// // const {signout,signup, signin, isSignedIn} = require("../controllers/auth");

// // //  validation
// // router.post("/signup", [
// //     check("name","name should be min 3 char").isLength({min : 2}),
// //     check("email","email is required").isEmail(),
// //     check("password","password is should have more than 3 char").isLength({min : 3})
// // ],signup);


// // router.post("/signin", [
// //     check("email","email is required").isEmail(),
// //     check("password","password is req").isLength({min : 1})
// // ],signin);

// // //routes + controller
// // router.get("/signout", signout);  



// // module.exports = router;


// var express = require("express");
// var router = express.Router();
// const { check, validationResult } = require("express-validator");
// const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

// router.post(
//   "/signup",
//   [
//     check("name", "name should be at least 3 char").isLength({ min: 3 }),
//     check("email", "email is required").isEmail(),
//     check("password", "password should be at least 3 char").isLength({ min: 3 })
//   ],
//   signup
// );

// router.post(
//   "/signin",
//   [
//     check("email", "email is required").isEmail(),
//     check("password", "password field is required").isLength({ min: 1 })
//   ],
//   signin
// );

// router.get("/signout", signout);

// module.exports = router;
