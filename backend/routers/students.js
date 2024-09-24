import express from "express"
const studentRouter = express.Router()
import uploadMiddleware from "../helpers/multer"
import { createStudent, getAllStudents, getPaginated } from "../controllers/students"

studentRouter.post("/student", createStudent)
studentRouter.post("/student/image", uploadMiddleware, createStudent)
studentRouter.get("/allstudents", getAllStudents)
studentRouter.get("/students", getPaginated)


export default studentRouter
