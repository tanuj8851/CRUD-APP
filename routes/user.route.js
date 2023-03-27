const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");

userRouter.post("/register", async(req, res) => {
    const { name, email, pass } = req.body;
    try {

        bcrypt.hash(pass, 5, async(err, hash) => {

            if (err) {
                res.send({ "msg": err.message })
            } else {
                const user = new userModel({ name, email, pass: hash });
                await user.save();
                res.send({ "msg": "New user has been registered" })
            }
        });

    } catch (error) {
        res.send({ "msg": error.message })
    }

})


userRouter.post("/login", async(req, res) => {
    const { email, pass } = req.body;

    try {
        const user = await userModel.find({ email });
        if (user.length > 0) {

            bcrypt.compare(pass, user[0].pass, (err, result) => {
                // result == true

                if (result) {
                    let token = jwt.sign({ userId: user[0]._id }, "masai")
                    res.send({ "msg": "Logged in", "token": token })
                } else {
                    res.send({ "msg": "Wrong Credentials" })
                }
            });




        } else {
            res.send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.send({ "msg": error.message })
    }

})

module.exports = {
    userRouter
}