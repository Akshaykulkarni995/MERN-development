const { Router } = require("express");

var express = require("express");
var router = express.Router();

const 

router.get("/signout", (req,res) => {
res.send("User signout");
})


module.exports = router;