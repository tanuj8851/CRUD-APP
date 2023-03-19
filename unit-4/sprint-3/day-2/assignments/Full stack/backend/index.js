const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
const authRoute = require("./routes/authRoutes");

const connection = async() => {
    try {
        await mongoose.connect("mongodb+srv://tanuj:tanujkumar@cluster0.jqvoyhd.mongodb.net/fullStack?retryWrites=true&w=majority");
        console.log("DB connected");
    } catch (error) {
        console.log(error)
    }
}

app.use("/auth", authRoute);

app.listen(3000, () => {
    connection()
    console.log("Server started at 8000")
})