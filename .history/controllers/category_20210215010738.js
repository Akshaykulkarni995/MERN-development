// pull the model 
const Category = require("../models/category")


exports.getCategoryById = (req,res,next,id) => {

    Category.findById(id).exec((err,cate) => {

        if(err){
            return res.status(400).json({
                error : " "
            })
        }
        

    })


}