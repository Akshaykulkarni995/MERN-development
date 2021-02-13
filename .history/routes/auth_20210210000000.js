const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();

//get auth from controller
const { check } = require('express-validator');
const {signout,signup} = require("../controllers/auth");

 
router.post("/signup", [
    check("name").isLength({min : 5})
],ignup);
router.get("/signout", signout);  


module.exports = router;