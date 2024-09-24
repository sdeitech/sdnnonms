import mongoose from "mongoose";

const initiateDbConnection = async () => {
    try {
        const db = await mongoose.connect(`mongodb://localhost:27017/GradeManagement`)
        console.log(`DB is conneted to app`)

    } catch (error) {
        console.log(`Cant connect to the DB`)
        console.log(`Error : ${error.message}`)

    }
}

module.exports = initiateDbConnection