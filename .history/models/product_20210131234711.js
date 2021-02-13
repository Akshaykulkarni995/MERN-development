const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 30
        },
        description: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 1000
        },
        price: {
            type: Number,
            required: true,
            maxlength: 1000
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        stock : { 
            type : Number,
         
        },
        unit : {
            type : Number,
            default : 0
        }, 
        photo : {
            data : Buffer,
            contentType: String
        }
    },{timestamps : true}
)


module.exports = mongoose.Schema("Product",productSchema );
//can be added more schema if needed