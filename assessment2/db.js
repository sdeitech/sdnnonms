const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/StudentReports");
const db=mongoose.connection;

db.on("error",console.error.bind("connection failed !"));

db.once("open",()=>
    {console.log("connection successfull")}
);

module.exports=db;