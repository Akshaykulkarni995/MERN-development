const { Router } = require("express");

var express = require("express");
const { sign } = require("jsonwebtoken");
var router = express.Router();

const signout = (req,res) => {
    res.json({
        message : Signou
    })
    }

router.get("/signout", signout);  


module.exports = router;