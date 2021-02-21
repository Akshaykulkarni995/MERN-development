const express = require("express");
const router = express.Router();
const { isSignedIn,isAdmin,isAuthenticated  }  = require("../controllers/auth")
const {getCategory,createCategory,getCategoryById,getAllCategory,updateCategory,removeCategory} 
= require("../controllers/category")
const { getUserById  }  = require("../controllers")

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