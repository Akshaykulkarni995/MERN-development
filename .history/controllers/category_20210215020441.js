// pull the model 
const { model } = require("mongoose");
const Category = require("../models/category")


exports.getCategoryById = (req,res,next,id) => {

    Category.findById(id).exec((err,cate) => {

        if(err){
            return res.status(400).json({
                error : " Category not found"
            })
        }
        req.Category = cate;
        next();
        

    })


}

exports.createCategory = (req,res) => {
    const category = new Category(req.body)
    // model
    Category.save((err, Category))
}