
const Product = require('../model/productmodel');


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
const  getprod = async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


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