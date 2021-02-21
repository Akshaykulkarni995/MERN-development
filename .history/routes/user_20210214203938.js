const { request } = require("express");
const express = require("express");
const User = require("../models/user") 

const {getUserById,getUser} = require("../controllers//user");
const {isAuthenticated} = require("../controllers/auth");
const router = require("./auth");

router.param("userId",getUserById) ;

router.get("/user/:userId",getUser);

module.exports = router;