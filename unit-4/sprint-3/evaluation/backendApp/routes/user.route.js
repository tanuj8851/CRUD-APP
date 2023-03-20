const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../models/user.model")


userRouter.post("/add", async(req, res) => {
    const data = req.body

    try {
        const movieData = new userModel(data);
        await movieData.save();
        res.send("Movie has been added").status(200)
    } catch (error) {
        console.log(error)
        res.send({ msg: error.messege }).status(400)
    }
})



userRouter.get("/:userId", async(req, res) => {
    const { userId } = req.params

    try {
        const data = await userModel.find({ _id: userId })
        res.send(data).status(200)
    } catch (error) {
        res.send({ "msg": error.messege }).status(400)
    }
})



userRouter.get("/data", async(req, res) => {
    const query = req.query

    try {
        const data = await userModel.find(query)
        res.send(data).status(200)
    } catch (error) {
        res.send({ "msg": error.messege }).status(400)
    }
})


userRouter.patch("/update/:movieId", async(req, res) => {
    const { userId } = req.params;
    const data = req.body

    try {
        await userModel.findByIdAndUpdate({ _id: userId }, data);
        res.send({ "msg": "The movie has been updated" }).status(200)
    } catch (error) {
        res.send({ "msg": error.messege }).status(400)
    }
})


userRouter.delete("/delete/:movieId", async(req, res) => {
    const { userId } = req.params;
    const data = req.body

    try {
        await userModel.findByIdAndDelete({ _id: userId });
        res.send({ "msg": "The movie has been Deleted" }).status(200)
    } catch (error) {
        res.send({ "msg": error.messege }).status(400)
    }
})

module.exports = {
    userRouter
}