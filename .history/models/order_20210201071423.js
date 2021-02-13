const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductsCartSchema = mongoose.Schema({
    product :{
        type: ObjectId,
        ref : "User"
    },
    name : String,
    count : Number,
    price : Number
});

const ProductCart = mongoose.model("ProductCart",ProductsCartSchema)

const OrderSchema = new mongoose.Schema(
    {
        products : [ProductsCartSchema],
        transaction_id : {},
        amount: {type: Number},
        address : String,
        updated : Date,
        user :{
            type : ObjectId,
            ref : "User"
        }
    },{timestamps : true}
);


const Order = mongoose.model("Order",OrderSchema)


module.exports = ProductCart.