const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const { log } = require('console');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(cors({ origin: '*' }));

const productRoute = require('./route/ProductR');

app.use(bodyParser.json());
app.use('/', productRoute);


app.listen(PORT, () => {
    console.log(`server is connected to http://localhost:${PORT}`);
});
