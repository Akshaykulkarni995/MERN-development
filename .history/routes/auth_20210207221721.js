const { Router } = require("express");

var express = require("express");
const { sign } = require("jsonwebtoken");
var router = express.Router();

const signout = (req,res) => {
    res.send("User signout");
    }

router.get("/signout", signout


module.exports = router;