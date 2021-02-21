
const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById , pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product")

const { getOrderById ,createOrder } = require("../controllers/order");

//params

router.param("userId",getUserById)
router.param("orderId",getOrderById);

//create
router.post("/order/create/:userId",isSignedIn,isAuthenticated,p)
//read

//delete

//update


module.exports = router;