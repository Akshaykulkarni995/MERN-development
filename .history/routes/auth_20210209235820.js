const { Router } = require("express");
var express = require("express");
// const { sign } = require("jsonwebtoken");
var router = express.Router();
const { check } = require('express-validator');
//get auth from controller
const {signout,signup} = require("../controllers/auth");

 
router.post("/signup", [
    check("name").is
],
signup);
router.get("/signout", signout);  


module.exports = router;