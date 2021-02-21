const express = require("express");
const { every } = require("lodash");
const router = express.Router();
const { isSignedIn,isAdmin,isAuthenticated  }  = require("../controllers/auth")
const {getCategory,createCategory,getCategoryById,getAllCategory,updateCategory,removeCategory} 
= require("../controllers/category")
const { getUserById  }  = require("../controllers/user")

//params
router.param("userId",getUserById) ;
router.param("categoryId", getCategoryById)

//create
//routes(injecting middleware)
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);


//read
router.get("/category/:categoryId",isSignedIn,isAuthenticated, getCategory )
router.get("/categories",isSignedIn,isAuthenticated, getAllCategory )

//update
router.put("/category/:categoryId/:userId"
,isSignedIn,
isAuthenticated, 
isAdmin,
updateCategory );


//delete
router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );



module.exports = router;


// every route u create u need to add in app.js 