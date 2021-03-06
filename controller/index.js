const models = require("../model"),
 Product = models.Product;
const sanitizer = require('sanitizer')
 function sanitizeInput(text) {
    const letters = /^[A-Za-z ]+$/;
    if(!(letters.test(text)))
        text = '';
    else
        text = sanitizer.sanitize(text);
    return text;
   
}
 module.exports = {
    createProduct : (req , res) => {
        if(req.body && req.body.name && req.body.categories){
            if(Array.isArray(req.body.categories) && req.body.categories.length > 0){
                let reqBody = req.body;
                let obj = {
                    name: sanitizeInput(reqBody.name),
                    brand_name : sanitizeInput(reqBody.brand_name),
                    categories : reqBody.categories
                };
                  Object.assign(obj , 
                    reqBody.images && {images : reqBody.images});  
                let insertObj = new Product(obj);
                insertObj.save(function(error, data) {
                  if (error) {
                    res.status(400).json({ message: error });
                  } else {
                    res.status(200).json({ message: data });
                  }
                });
            }
            else{
               return res.status(400).json({ message: "Atleast one category is required" });
            }
           
        }
        else{
            res.status(400).json({ message: "No Form Data" });
        }
    },
    getProductByID: (req, res) => {
        if (req.params.id) {
        let id = req.params.id 
          Product.findById(id)
            .exec((err, Products) => {
              if (err) 
                res.status(400).json({ message: err });
              else 
                res.status(200).json({ message: Products });
            });
        } else {
          Product.find()
                .exec()
                .then(results => {
                  res.status(200).json({ message: results });
                 }).catch(err=> {
                  res.status(400).json({ message: err });  
        });
        }
      },
      updateProduct : (req , res) => {
        if(req.body && req.params.id){
              let id = req.params.id;
              let updateObj = req.body;
                Object.assign(updateObj , 
                    updateObj.name && {name : sanitizeInput(updateObj.name )},
                    updateObj.categories && Array.isArray(updateObj.categories) && updateObj.categories.length > 0 && {categories :  updateObj.categories  },
                    updateObj.images && {images : Array.isArray(updateObj.images) ? updateObj.images : [] },
                    updateObj.brand_name && {brand_name : updateObj.brand_name});
                Product.updateOne({_id : id}, { $set: updateObj }).
                then((data) => {
                    if(data.nModified){
                        Product.findById(id)
                        .exec()
                        .then(function(Product) {
                            res.status(200).json({ message: Product });
                        });
                    }
                    else
                    res.status(400).json({ message: "No field is updated" });
                })
                .catch(err=> {
                    res.status(400).json({ message: err });   
                }) 
                              
        }
        else res.status(400).json({ message: "No Form Data" });
    },
    deleteProduct : (req , res) => {
      Product.findByIdAndRemove(req.params.id, (err, Product) => {
        if (err) 
          return res.status(500).send(err);
        return res.status(200).json({
          message: "Product successfully deleted",
          id: Product._ids
      });
    });
    
    },
    searchDB : (req , res) => {
      if(req.query){
         if(req.query.name || req.query.brand_name || req.query.category){
           let queryObj = {}
           Object.assign(queryObj,
              req.query.name && {name :{ $regex: '.*' + req.query.name + '.*' , $options: 'i'}},
              req.query.brand_name && {brand_name :{ $regex: '.*' + req.query.brand_name + '.*' , $options: 'i'}},
              req.query.category && {categories :{ $regex: '.*' + req.query.category + '.*' , $options: 'i'}},
           );
          Product.find(queryObj)
                .exec()
                .then(results => {
                  res.status(200).json({ message: results });
                 }).catch(err=> {
                  res.status(400).json({ message: err });   
         });
      }
      else  res.status(400).json({ message: "Please enter valid filter" });
    }
    else  res.status(400).json({ message: "No filter selected" });

 }

}
