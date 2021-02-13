const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();
//get auth from controller
const {signout} = require("../controllers/auth");

 
router.get("/")
router.get("/signout", signout);  


module.exports = router;