const { request } = require("express");
const express = require("express");
const User = require("../models/user") 

const {getUserById, getUser,getAllUsers } = require("../controllers//user");
const {isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
const router = require("./auth");

router.param("userId",getUserById) ;
//middlewear 
router.get("/user/:userId", isSignedIn, isAuthenticated ,getUser);
// router.get("/users",getAllUsers)


module.exports = router;