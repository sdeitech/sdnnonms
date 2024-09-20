const express = require('express');
const router = express.Router();

const { createProduct, getProduct, deleteProductByID, updateProduct ,getProductById} = require('../controller/ProductC')

router.post('/product', createProduct);
router.get('/product', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProductByID);
router.get('/getproduct/:id',getProductById);

module.exports = router;