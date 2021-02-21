const { request } = require("express");
const express = require("express");
const User = require("../models/user") 

const {getUserById, getUser,updateUser } = require("../controllers//user");
const {isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
const router = require("./auth");

router.param("userId",getUserById) ;
//middlewear 
router.get("/user/:userId", isSignedIn, isAuthenticated ,getUser);
// router.get("/users",getAllUsers)
router.put("/user/:userId", isSignedIn, isAuthenticated ,updateUser)

module.exports = router;