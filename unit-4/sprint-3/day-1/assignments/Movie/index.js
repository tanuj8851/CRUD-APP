const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/movie-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    actors: [String],
    rating: Number,
    releaseYear: Number,
});


const Movie = mongoose.model('Movie', movieSchema);


app.get('/', (req, res) => {
    res.send('Welcome to the Movie Store API!');
});

app.get('/movies', async(req, res) => {
    try {
        const { q, sortBy, sortOrder, page, limit } = req.query;


        const pageNumber = parseInt(page, 10) || 1;
        const pageSize = parseInt(limit, 10) || 10;


        const query = {};

        if (q) {
            query.title = { $regex: new RegExp(q, 'i') };
        }

        const sort = {};
        if (sortBy) {
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }


        const count = await Movie.countDocuments(query);

        const movies = await Movie.find(query)
            .sort(sort)
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize);

        res.json({
            movies,
            total: count,
            page: pageNumber,
            limit: pageSize,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/movies/:id', async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ error: 'Movie not found' });
        } else {
            res.json(movie);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/movies', async(req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/movies/:id', async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ error: 'Movie not found' });
        } else

            Object.assign(movie, req.body);
        await movie.save();

        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/movies/:id', async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ error: 'Movie not found' });
        } else {
            await movie.delete();
            res.status(204).end();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});