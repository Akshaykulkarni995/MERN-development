const { Router } = require("express");

var express = require("express");
const { sign } = require("jsonwebtoken");
var router = express.Router();

const {} = require("./c")

router.get("/signout", signout);  


module.exports = router;