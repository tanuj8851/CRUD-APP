const exp = require("constants");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const { userRouter } = require("./routes/user.route")


app.use(express.json());
app.use("/movie", userRouter)

const connection = async() => {
    await mongoose.connect("mongodb+srv://tanuj:tanujkumar@cluster0.jqvoyhd.mongodb.net/Backend?retryWrites=true&w=majority")
    console.log("DB connected");
}

app.get("/datas", (req, res) => {
    res.send("Home Page", res);
})



app.listen(9999, async() => {
    try {
        await connection();
        console.log("App is running on port 9999")
    } catch (error) {
        console.log({ msg: error })
    }

})