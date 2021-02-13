const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductsCartSchema = mongoose.Schema({
    pro
})

const orderSchema = new mongoose.Schema(
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