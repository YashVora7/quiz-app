const express = require("express")
const cors = require("cors")
const connect = require("./config/db")
const userRouter = require("./routes/user.route")
const quizRouter = require("./routes/quiz.route")
const auth = require("./middleware/auth.middleware")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/quiz",quizRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connect()
})