const mongoose = require("mongoose");
const {} = mongoose.Schema;
const productSchema = new mongoose.Schema(

    {
        name:{
            type : String,
            required:true,
            unique : true,
            trim:true,
            maxlength : 30
        },
        description :{
            type : String,
            required:true,
            unique : true,
            trim:true,
            maxlength : 1000
        },
        price : {
            type : Number,
            required:true,
            maxlength : 1000
        },
        category : {

        }
    }
)