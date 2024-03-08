const express = require('express');
const app = express();

// Define a route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for handling POST requests to the '/submit' URL
app.post('/submit', (req, res) => {
  // Handle the POST request here
  res.send('Received POST request');
});

// Define a route with URL parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Define a route with multiple URL parameters
app.get('/users/:id/posts/:postId', (req, res) => {
  const userId = req.params.id;
  const postId = req.params.postId;
  res.send(`User ID: ${userId}, Post ID: ${postId}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
