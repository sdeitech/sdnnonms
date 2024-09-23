const express=require('express');
const bodyParser=require('body-parser');
const db=require('./db');
const cors=require('cors');
const studentRoute=require('./route/student.route');
const app=express();
const PORT=4768;

app.use(cors({origin:"*"}));

app.use(bodyParser.json());
app.use('',studentRoute);

app.listen(PORT,()=>
{
    console.log(`connected to server http://localhost:${PORT}`);
})
