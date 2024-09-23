const mongoose=require('mongoose');


/*
student schema
*/
const studentSchema= mongoose.Schema({
    firstName:{
        type:String, 
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    maths:{
        type:Number,
        required:true
    },
    english:{
        type:Number,
        required:true
    }
});

const student=mongoose.model('student',studentSchema);

/*
exports model to the controller for logic
*/
module.exports=student;