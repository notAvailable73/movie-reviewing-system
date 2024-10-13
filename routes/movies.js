const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Helper function to read movies from JSON file
const readMoviesFromFile = () => {
    const dataPath = path.join(__dirname, '../data/movies.json');
    const rawData = fs.readFileSync(dataPath);
    return JSON.parse(rawData);
};

// Get all movies
router.get('/', (req, res) => {
    const movies = readMoviesFromFile();
    res.json(movies);
});

// Get a specific movie by ID
router.get('/:id', (req, res) => {
    const movies = readMoviesFromFile();
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).send('Movie not found');
    }
});

// Add a movie to favorites (you'll need to modify this later)
router.post('/favorite', (req, res) => {
    // This is where you will handle adding a movie to the user's favorites
    // For now, just send a success response
    res.send('Movie added to favorites');
});

// Post a review for a specific movie (you'll need to modify this later)
router.post('/:id/review', (req, res) => {
    // This is where you will handle adding a review to the movie
    // For now, just send a success response
    res.send('Review posted for movie');
});

module.exports = router;
