import express from 'express';
import { createArticles, deleteArticles, getArticles } from '../controllers/articlesController.js';
const app = express();

// Define a route for handling GET requests to the root URL

app.get('/',getArticles);

app.post('/', createArticles);
  
app.delete('/',deleteArticles);

app.update('/',updateArticles);

app.get('/:id', (req, res) => {
    const articleId = req.params.id;
    res.send(`Article ID: ${articleId}`);
  });



export default app