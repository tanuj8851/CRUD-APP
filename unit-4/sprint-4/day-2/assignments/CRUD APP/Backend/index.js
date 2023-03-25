const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const { userRouter } = require("./routes/user.route")
const { noteRouter } = require("./routes/note.route")
const { connection } = require("./db")
const { authenticate } = require("./middlewares/authenticate.middleware")


app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/user", userRouter)
app.use(authenticate)
app.use("/notes", noteRouter)





app.listen(process.env.port, async() => {
    try {
        await connection
        console.log("DB Connected")
    } catch (error) {
        console.log({ "msg": error.messege });
    }
    console.log(`App is running on port ${process.env.port}`);
})