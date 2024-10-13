const express = require('express');
const router = express.Router();

const UserModel = require('../models/userModel');

// In-memory storage for user favorites (for simplicity)
let userFavorites = [];
let userWatched = [];
let userWishlist = [];
 
// Get user profile
router.get('/profile', (req, res) => {
    const userProfile = {
        favorites: userFavorites,
        watched: userWatched,
        wishlist: userWishlist
    };
    res.json(userProfile);
});


// Add to favorites
router.post('/favorites', (req, res) => {
    const { movieId } = req.body; // Ensure you are sending { movieId: <id> }
    if (!userFavorites.includes(movieId)) {
        userFavorites.push(movieId);
        return res.send('Movie added to favorites');
    }
    res.send('Movie is already in favorites');
});

// Mark movie as watched
router.post('/watched', (req, res) => {
    const { movieId } = req.body;
    if (!userWatched.includes(movieId)) {
        userWatched.push(movieId);
        return res.send('Movie marked as watched');
    }
    res.send('Movie is already marked as watched');
});

// Add to wishlist
router.post('/wishlist', (req, res) => {
    const { movieId } = req.body;
    if (!userWishlist.includes(movieId)) {
        userWishlist.push(movieId);
        return res.send('Movie added to wishlist');
    }
    res.send('Movie is already in wishlist');
});



// Mark movie as watched
router.post('/watched', (req, res) => {
    const { movieId } = req.body;
    if (!userWatched.includes(movieId)) {
        userWatched.push(movieId);
    }
    res.send('Movie marked as watched');
});

// Add to wishlist
router.post('/wishlist', (req, res) => {
    const { movieId } = req.body;
    if (!userWishlist.includes(movieId)) {
        userWishlist.push(movieId);
    }
    res.send('Movie added to wishlist');
});

module.exports = router;
