const { request } = require("express");
const express = require("express");
const User = require("../models/user") 

const {getUserById} = require("../controllers//user");
const {} = require("../controllers/auth");
const router = require("./auth");

router.param("userId",getUserById) 

router.get

module.exports = router;