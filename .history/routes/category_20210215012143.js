const express = require("express");
const router = require.Router();

const {} = require("../controllers/category")
const {isAuthenticated, isSignedIn, isAdmin }  = require("../controllers/auth")
const { getUserById , }  = require("../controllers/user ")

//params
router.param("userId",getUserById) ;
router.param("categoryId", getCategoryById)



module.exports = router;
