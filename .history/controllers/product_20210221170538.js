// // const Product = require("../models/product");
// // const formidable = require("formidable");
// // const _ = require("lodash");
// // const fs = require("fs");

// // exports.getProductById = (req, res, next, id) => {
// //   Product.findById(id)
// //     .populate("category")
// //     .exec((err, product) => {
// //       if (err) {
// //         return res.status(400).json({
// //           error: "Product not found"
// //         });
// //       }
// //       req.product = product;
// //       next();
// //     });
// // };

// // //create new form which formidable package 
// // exports.createProduct = (req, res) => {
// //   let form = new formidable.IncomingForm();
// //   form.keepExtensions = true;

// //   form.parse(req, (err, fields, file) => {
// //     if (err) {
// //       return res.status(400).json({
// //         error: "problem with image"
// //       });
// //     }
// //     // //destructure the fields
// //     // const { name, description, price, category, stock } = fields;

// //     // if (!name || !description || !price || !category || !stock) {
// //     //   return res.status(400).json({
// //     //     error: "Please include all fields"
// //     //   });
// //     // }
// // //TODO
// //     let product = new Product(fields);

// //     //handle file here(images)
// //     if (file.photo) {
// //       if (file.photo.size > 3000000) {
// //         return res.status(400).json({
// //           error: "File size too big!"
// //         });
// //       }
// //       product.photo.data = fs.readFileSync(file.photo.path);
// //       product.photo.contentType = file.photo.type;

// //     }

// //     console.log(Product);

// //     //save images to the DB
// //     product.save((err, product) => {
// //       if (err) {
// //         res.status(400).json({
// //           error: "Saving tshirt in DB failed"
// //         });
// //       }
// //       res.json(product);
// //     });
// //   });
// // };
// const Product = require("../models/product");
// const formidable = require("formidable");
// const _ = require("lodash");
// const fs = require("fs");

// exports.getProductById = (req, res, next, id) => {
//   Product.findById(id)
//     .populate("category")
//     .exec((err, product) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Product not found"
//         });
//       }
//       req.product = product;
//       next();
//     });
// };

// exports.createProduct = (req, res) => {
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;

//   form.parse(req, (err, fields, file) => {
//     if (err) {
//       return res.status(400).json({
//         error: "problem with image"
//       });
//     }
//     //destructure the fields
//     const { name, description, price, category, stock } = fields;

//     if (!name || !description || !price || !category || !stock) {
//       return res.status(400).json({
//         error: "Please include all fields"
//       });
//     }

//     let product = new Product(fields);

//     //handle file here
//     if (file.photo) {
//       if (file.photo.size > 3000000) {
//         return res.status(400).json({
//           error: "File size too big!"
//         });
//       }
//       product.photo.data = fs.readFileSync(file.photo.path);
//       product.photo.contentType = file.photo.type;
//     }
//     console.log(product);

//     //save to the DB
//     product.save((err, product) => {
//       if (err) {
//         res.status(400).json({
//           error: "Saving tshirt in DB failed"
//         });
//       }
//       res.json(product);
//     });
//   });
// };


const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found"
        });
      }
      req.product = product;
      next();
    });
};

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }
    //destructure the fields
    const { name, description, price, category, stock } = fields;

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "Please include all fields"
      });
    }

    let product = new Product(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }
    console.log(product);

    //save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in DB failed"
        });
      }
      res.json(product);
    });
  });
};

//to get the response fast
exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

//middleware
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};


//product routes
exports.c = (req, res) => {
  let product = req.product
  product.remove((err, deletedproduct) => {
    if (err) {
      res.status(400).json({
        error: "failed to delete this product"
      })
    }
    res.json({
      message: "Deletion successful",
      deletedproduct
    })
  })


};

//update product controller
exports.updateProduct = (req, res) => {

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }


    let product = req.Product(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }
    console.log(product);

    //save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in DB failed"
        });
      }
      res.json(product);
    });
  });

};