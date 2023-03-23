const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://tanuj:tanujkumar@cluster0.jqvoyhd.mongodb.net/users?retryWrites=true&w=majority")


module.exports = {
    connection
}