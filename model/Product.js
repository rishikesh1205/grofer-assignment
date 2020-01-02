module.exports  =  (mongoose , Schema) => {
    const Product =  new Schema({
        name:
        {
          type:String,
          required: true
        },
        categories:[
            {type: String, required:true}
          ],
        brand_name: {
          type: String,
        },
        images: [{
          type: String,
        }]
      }, 
      {
        timestamps: true
      }
    );
    return mongoose.model('Product', Product);
};