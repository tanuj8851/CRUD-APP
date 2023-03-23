const mongoose = require("mongoose")
const express = require("express")
const userRouter = express.Router();
const { userModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");


// Registeration
userRouter.post("/register", (req, res) => {
    try {
        const user = new userModel(req.body);
        user.save();
        res.status(200).send("Registeration Successful")
    } catch (error) {
        res.status(400).send("Registeration Failed")
    }

})


// Login
userRouter.post("/login", async(req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await userModel.find({ email: email, pass: pass });
        user.length > 0 ? res.status(200).send({
            "msg": "Login Successful",
            "token": jwt.sign({ name: 'batman' }, 'bruce', { expiresIn: '1h' })
        }) : user.status(400).send({ "msg": "login Failed" });

    } catch (error) {
        console.log({ "msg": error.msg })
    }

})

userRouter.get("/Posts", (req, res) => {
    const token = req.headers.authorization;

    jwt.verify(token, 'bruce', function(err, decoded) {
        decoded ? res.status(200).send("Posts") : res.status(400).send({ "msg": err.message });
    });
})


module.exports = {
    userRouter
}