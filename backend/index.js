const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const prodRoutes = require('./route/productroute');
const cors=require('cors');
const db = require('./db');

const PORT = 3005;
app.use(bodyParser.json());
app.use(cors());
app.use('/api',prodRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port :${PORT}`);
});