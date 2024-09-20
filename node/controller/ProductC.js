const product = require('../model/productM');
const mongoose=require('mongoose')

exports.getProduct = async (req, res) => {
    try {
        const findProduct = await product.find();
        res.json(findProduct );

    } catch (error) {
        res.status(500).json("data not found");
    }
}

exports.createProduct = async (req, res) => {
    console.log(req.body);
    
    try {
        const newProduct = new product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct )

    } catch (error) {
        // console.log(error);
        
        res.status(400).json('data is not entered');
    }
}


exports.updateProduct = async (req, res) => {
    const {
        productName,quantity,description, manufacturer,expiry
    }=req.body;
    try {
        const upProduct = await product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        if(!upProduct)
        {
            res.status(404).json({message:"id is not there in the list"});
        }
        
       res.json(upProduct);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.deleteProductByID = async (req, res) => {
    try {
        const productDel = await product.findByIdAndDelete(req.params.id);
        if(!productDel)
        {
            res.status(404).json({message:"product not found"})
        }

        res.json({ message: 'product deleted !'});

    } catch (error) {
        res.status(500).json({message:"error"});
    }
}

exports.getProductById= async (req, res) => {
    try {
        const findProduct = await product.findOne({_id:req.params.id});
        if(!findProduct)
        {
            res.status(404).json({message:"product is not there in the list"})
        }
        return res.json(findProduct );

    } catch (error) {
        
        res.status(500).json("data not found");
    }
}