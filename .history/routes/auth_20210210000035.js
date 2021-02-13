const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();

//get auth from controller
const { check } = require('express-validator');
const {signout,signup} = require("../controllers/auth");

 
router.post("/signup", [
    check("name","name should be ").isLength({min : 2})
],signup);
router.get("/signout", signout);  


module.exports = router;