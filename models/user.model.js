const mongoose = require("mongoose");
require('dotenv').config()

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,


}, {
    versionKey: false
})

const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel
}