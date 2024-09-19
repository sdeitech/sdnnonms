const express = require('express');
const router = express.Router();

const { createProduct, getProduct, getproductByID, deleteProductByID, updateProduct } = require('../controller/ProductC')

router.post('/product', createProduct);
router.get('/product', getProduct);
router.get('/product/:id', getproductByID);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProductByID);

module.exports = router;