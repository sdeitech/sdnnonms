const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productDB')
.then(() => console.log("Connected to Mongodb!"))
    .catch(err => console.error("Not connected to Mongodb.", err));