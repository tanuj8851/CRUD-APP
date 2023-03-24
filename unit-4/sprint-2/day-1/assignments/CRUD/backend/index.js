const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const FILE_PATH = './db.json';

app.get('/', (req, res) => {
    fs.readFile("./db.json", (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        const todos = JSON.parse(data);
        res.json(todos);
    });
});

app.post('/', (req, res) => {
    const { title, completed } = req.body;
    if (!title) {
        res.status(400).send('Title is required');
        return;
    }
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        const todos = JSON.parse(data);
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: completed || false,
        };
        todos.push(newTodo);
        fs.writeFile(FILE_PATH, JSON.stringify(todos), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.json(newTodo);
        });
    });
});

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    if (!title) {
        res.status(400).send('Title is required');
        return;
    }
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        const todos = JSON.parse(data);
        const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));
        if (todoIndex === -1) {
            res.status(400).send('Todo not found');
            return;
        }
        const updatedTodo = {
            ...todos[todoIndex],
            title,
            completed: completed || todos[todoIndex].completed,
        };
        todos[todoIndex] = updatedTodo;
        fs.writeFile(FILE_PATH, JSON.stringify(todos), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.json(updatedTodo);
        });
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
            return;
        }
        let todos = JSON.parse(data);
        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            res.status(400).send('Todo not found');
            return;
        }
        todos = todos.filter(todo => todo.id !== id);
        fs.writeFile(FILE_PATH, JSON.stringify(todos), 'utf8', (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal server error');
                return;
            }
            res.status(200).send();
        });
    });
});


app.listen(1080, () => {
    console.log("App is running on Port 1080")
})