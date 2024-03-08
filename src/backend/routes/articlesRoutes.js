const express = require('express');
const app = express();

// Define a route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('api/articles', (req, res) => {
    res.send('Articles');
  });

app.post('api/articles', (req, res) => {
    // Handle the POST request here
    res.send('Received POST request');
  });

app.get('api/articles/:id', (req, res) => {
    const articleId = req.params.id;
    res.send(`Article ID: ${articleId}`);
  });


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})