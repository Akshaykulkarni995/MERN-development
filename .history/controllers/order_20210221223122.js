const { Order, ProductCart } = require("../models/order")

exports.getOrderById = (req,res,next,id) => {

    Order.findById(id).exec((err,order) => {
        if(err){
            return res.status(400)
        }
    })
}