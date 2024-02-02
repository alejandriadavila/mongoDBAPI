import express from "express"
import dotenv from "dotenv"
dotenv.config()

// import mongoose
import mongoose from "mongoose"

// Connection string
const ATLAS_URI = process.env.ATLAS_URI
const db = mongoose.connection

mongoose.connect(ATLAS_URI)

db.on("error", (err) => console.log(err.messge) + "is mongodb not running?")
db.on("open", () => console.log("mongo connected"))
db.on("close", () => console.log("mongo disconnected"))

const PORT = process.env.PORT || 5050
const app = express()

import grades from "./routes/grades.mjs"

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome to the API")
})

app.use("/grades", grades)

// Global error handling
app.use((err, _req, res, next) =>{
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
  })