
const Product = require('../model/productmodel');

//To post the data
const  createProd = async (req, res) => {
    console.log(req.body);


    try {
        const newProd = new Product(req.body);
        await newProd.save();
        res.status(201).json(newProd);
        console.log("product created", newProd)
    } catch (error) {
        console.log(error);

        res.status(400).json({ error: error.message });
    }

};

//To get the data 
const  getprod = async (req, res) => {
        console.log('getting');
    try { 
    const products = await Product.find();
    res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//To put/update the data

const updateprod = async (req, res) => {
    try {
        const upProd = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!upProd) {
            return res.status(404).json({ error: 'Product not found' });
        } res.json(upProd); console.log("product updated");
    } catch (err) {
        res.status(400).json({ err: err.message });
        console.log("can't update product");
    }
}

//To delete the data 
const deleteprod = async (req, res) => {
    try {
        const delprod = await Product.findByIdAndDelete(req.params.id);
        if (!delprod) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
        console.log("product deleted");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {getprod, createProd, updateprod, deleteprod};