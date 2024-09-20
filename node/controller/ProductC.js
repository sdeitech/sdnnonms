const product = require('../model/productM');

exports.getProduct = async (req, res) => {
    try {
        const findProduct = await product.find();
        res.status(200).json({ message: 'data retrieve', findProduct });

    } catch (error) {
        res.status(404).json("data not found");
    }
}

exports.createProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();
        res.status(201).json({ message: 'data posted', data: { newProduct } })

    } catch (error) {
        res.status(400).json('data is not entered');
    }
}

exports.getproductByID = async (req, res) => {
    try {
        const findProductbyId = await product.findById(req.params._id);

        res.status(200).json({ message: 'data found by id', data: { findProductbyId } })
    } catch (error) {
        res.status(404).json('data not found by id');
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const upProduct = await product.findByIdAndUpdate(req.params._id);
        const saveNewData = await upProduct.save();
        res.status(200).json({ message: 'data updated by id', data: { saveNewData } })
    } catch (error) {
        res.status(404).json(error);
    }
}

exports.deleteProductByID = async (req, res) => {
    try {
        const productDel = await product.findByIdAndDelete(req.params._id);

        res.status(410).json({ message: 'data delete by id', data: productDel.req.params.id });

    } catch (error) {
        res.status(400).json(error);

    }
}