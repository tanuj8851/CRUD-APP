const express = require("express")
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route")

const app = express();
app.use(express.json());
app.use("/users", userRouter)

app.get("/", (req, res) => {
    res.send("Home Page");
})


app.listen(1000, async() => {

    try {
        await connection
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }


    console.log("Server is running at port 1000");
})