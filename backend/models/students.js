import mongoose from "mongoose";
const Schema = mongoose.Schema

const StudentsSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    english: {
        type: Number,
        required: true,
        trim: true
    },
    science: {
        type: Number,
        required: true,
        trim: true
    },
    math: {
        type: Number,
        required: true,
        trim: true
    },
    percent: {
        type: Number,
    },
    grade: {
        type: String
    },

    about: {
        type: String,
        required: true,
        trim: true
    }
})

const Students = mongoose.model("Student", StudentsSchema)
export default Students