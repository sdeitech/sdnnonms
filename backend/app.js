import express from "express"
const app = express()
require("dotenv").config()
import cors from "cors"
import studentRouter from "./routers/students"

app.use(express.json())
app.use(cors({ origin: "*" }))
app.get("/", (req, res) => {
    res.send("hello node")

})
app.use("/api", studentRouter)


export default app