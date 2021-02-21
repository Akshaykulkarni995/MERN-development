const express = require("express");
const router = require.Router();

const {} = require("../controllers/category")
const {isAuthenticated, isSignedIn, isAdmin }  = require("../controllers/auth")
const { getUserById , }  = require("../controllers/user ")

//params
router.param("userId",getUserById) ;
router.param("categoryId", getCategoryById)

//routes(injecting middleware)
router.post("/category/create/:userId"
,isSignedIn,
isAuthenticated, 
isAdmin,
createCategory );

router.get()

module.exports = router;
