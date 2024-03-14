const express = require('express');
const app = express();

// Define a route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});