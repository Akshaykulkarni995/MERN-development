const { Order, ProductCart } = require("../models/order")

exports.getOrderById = (req, res, next, id) => {

    Order.findById(id)
        .populate("products.product", "name price")
        .exec((err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "No order found in db"
                })
            }
            req.order = order;
            next();
        });
};


exports.createOrder = (req,res) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    order.save((err,order) =>{
        if (err) {
            return res.status(400).json({
                error: "Failed to save order in db"
            });
        };
        res.json(order);
    });
};


//getall 