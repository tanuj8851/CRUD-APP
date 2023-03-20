const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    movie_name: String,
    genre: String,
    director: String,
    rating: Number,
    year_of_release: Number
}, {
    versionKey: false
})

const userModel = mongoose.model("user", userSchema)

module.exports = {
    userModel
}