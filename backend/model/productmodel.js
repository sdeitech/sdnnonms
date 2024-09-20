const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    quantity:{
        type:Number,
        require:true
    },
    expiry_dt: {
        type: Date,
        require: true
    },
    manufacturer: {
        type: String,
        require: true
    }

})
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
