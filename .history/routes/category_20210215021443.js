const express = require("express");
const router = require.Router();

const {getCategory,createCategory} = require("../controllers/category")
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

router.get("/category/:categoryId",isSignedIn,isAuthenticated, getCategory )
router.get("/categories",isSignedIn,isAuthenticated, getCategory )

module.exports = router;