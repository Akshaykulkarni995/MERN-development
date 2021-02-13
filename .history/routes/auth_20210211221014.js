const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();

//get auth from controller
const { check, validationResult } = require('express-validator');
const {signout,signup,signin} = require("../controllers/auth");

//  validation
router.post("/signup", [
    check("name","name should be min 3 char").isLength({min : 2}),
    check("email","email is required").isEmail(),
    check("password","password is req ").isLength({min : 1})
],signup);


router.post("/signin", [
    check("name","name should be min 3 char").isLength({min : 2}),
    check("email","email is required").isEmail(),
    check("password","password is req").isLength({min : 1})
],signup);

//routes + controller
router.get("/signout", signout);  


module.exports = router;