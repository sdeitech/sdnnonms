const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: false },
    manufacturer:{type:String , required:false},
    expiry:{type:Date , required:false}

});

const product = mongoose.model('product', productSchema);

module.exports = product;