
const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById , pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product")

const {} = require("../controllers/order");

//params

router.param("userId",getUserById)
router.param("orderId",getUserById)



module.exports = router;