const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.ejs', { root: 'views' });
});

router.get('/services.ejs', (req, res) => {
    res.sendFile('services.ejs', { root: 'views' });
});

router.get('/unique.ejs', (req, res) => {
    res.sendFile('unique.ejs', { root: 'views' });
});

router.get('/login.ejs', (req, res) => {
    res.sendFile('login.ejs', { root: 'views' });
});

router.get('/signup.ejs', (req, res) => {
    res.sendFile('signup.ejs', { root: 'views' });
});

router.get('/index.ejs', (req, res) => {
    res.sendFile('index.ejs', { root: 'views' });
});
//module.exports = router;
// routes/index.js
const BlogPost = require('../models/BlogPost'); // Import the BlogPost model

// Route handler to render the blog page
router.get('/blog', async (req, res) => {
    try {
        // Fetch blog posts from the database
        const blogPosts = await BlogPost.find().sort({ createdAt: -1 }).limit(10); // Example query

        // Render the blog page and pass fetched blog posts to the template
        res.render('blog', { blogPosts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
