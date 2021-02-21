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
    // request body
    const category = new Category(req.body)
    // model
    category.save((err, category)  => {
        if(err){
            return res.status(400).json({
                error : "Not able to save"
            })
        }
        //response
        res.json({ category });

    })
}

exports.getCategory = (req, res) => {
return res.json(req.category)
}

exports.getAllCategory = (req , res) => {
Category.find().exec((err , categories) => {
    if(err){
        return res.status(400).json({
            error : "No Categories found"
        })
    }
    res.json(categories);
})
};

exports.removeCategory = (req, res) => {
    const category = req.category;
  
    category.remove((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };