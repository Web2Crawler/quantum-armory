const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// Serve static files from the public directory
app.use(express.static('public'));

// Define a route to render the EJS file
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup.ejs', (req, res) => {      
    res.render('signup');
});

app.get('/services.ejs', (req, res) => {
    res.render('services.ejs');
});

app.get('/login.ejs', (req, res) => {
    res.render('login');
});

app.get('/unique.ejs', (req, res) => {
    res.render('unique');
});

app.get('/index.ejs', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for the root URL
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
*/