const express = require("express")
const mongoose = require("mongoose");
const noteRouter = express.Router();
const { noteModel } = require("../models/note.model")

noteRouter.get("/", async(req, res) => {
    const notes = await noteModel.find()
    res.send(notes)
})



noteRouter.post("/create", async(req, res) => {
    const payload = req.body;

    const note = new noteModel(payload)
    await note.save();
    res.send({ "msg": "Note Created" });
})



noteRouter.delete("/delete/:id", async(req, res) => {
    const noteId = req.params.id;

    await noteModel.findByIdAndDelete({ _id: noteId });
    res.send({ "msg": `Note deleted by Id ${noteId}` });
})

noteRouter.patch("/update/:id", async(req, res) => {
    const noteId = req.params.id;
    try {
        const note = await noteModel.findByIdAndUpdate({ _id: noteId });
        // note.save()
        console.log(note)
        res.send({ "msg": `Note updated by Id ${noteId}` });
    } catch (error) {
        res.send({ "msg": error.message })
    }

})

module.exports = {
    noteRouter
}