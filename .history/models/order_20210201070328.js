const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        products : [productsCartSchema],
        transaction_id : {},
        amount: {type: Number},
        address : String,
        updated : Date,
        user :{
            type : ObjectId,
            ref : Uer
        }
    }
)