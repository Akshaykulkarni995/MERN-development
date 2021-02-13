const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();

//get auth from controller
const { check } = require('express-validator');
const {signout,signup} = require("../controllers/auth");

//  validation
router.post("/signup", [
    check("name","name should be min 3 char").isLength({min : 2}),
    check("email","email is req").isEmail(),
    check("password","atleat 3 char").isL
],signup);
router.get("/signout", signout);  


module.exports = router;