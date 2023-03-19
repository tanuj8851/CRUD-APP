const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const Connection = async() => {
    try {
        await mongoose.connect('mongodb+srv://tanuj:tanujkumar@cluster0.jqvoyhd.mongodb.net/?retryWrites=true&w=majority');
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

const db = mongoose.connection;


const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
});


const Todo = mongoose.model('Todo', todoSchema);





app.post('/todos/create', async(req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({ title, description });
        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/todos', async(req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.put('/todos/:todoId', async(req, res) => {
    try {
        const { todoId } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(todoId, {
            title,
            description,
            completed,
        }, { new: true });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/todos/:todoId', async(req, res) => {
    try {
        const { todoId } = req.params;
        await Todo.findByIdAndDelete(todoId);
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(5000, async() => {
    await Connection()
    console.log('Server started on port 3000');
});