const express = require('express');
const app = express();
const path = require('path');  

const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
 
app.get('/movie/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'moviePage.html'));
});
 
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'userProfile.html'));
});
 
app.get('/selectTags', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'selectTags.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
