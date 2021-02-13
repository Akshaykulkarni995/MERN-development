const mongoose = require("mongoose");

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
            type : String,
            required:true,
            unique : true,
            trim:true,
            maxlength : 1000
        }
    }
)