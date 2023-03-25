const mongoose = require("mongoose");
require('dotenv').config()

const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String,


}, {
    versionKey: false
})

const noteModel = mongoose.model("note", noteSchema);

module.exports = {
    noteModel
}