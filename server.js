 // Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Load budget data from budget.json
const budget = require('./budget.json');

// Serve static files from the public directory
app.use('/', express.static('public'));

// Define the /budget API route
app.get('/budget', (req, res) => {
    res.json(budget);
});

// Start the server
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});