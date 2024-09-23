const express=require('express');
const router=express.Router();
const {createReport,getDetailById,getDetails}=require('../controller/student.controller')

/*
creating routes to call methods
*/

router.get('/students/',getDetails);
router.post('/student/',createReport);
router.get('/student/:id',getDetailById);

module.exports=router;