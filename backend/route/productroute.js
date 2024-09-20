const express = require('express');
const router = express.Router();

const prodcontroller = require("../controller/productcontroller")

router.post('/create_product', prodcontroller.createProd);
router.get("/get_product",prodcontroller.getprod);
router.put('/update/:id', prodcontroller.updateprod);
router.delete('/delete/:id', prodcontroller.deleteprod);

module.exports = router;
