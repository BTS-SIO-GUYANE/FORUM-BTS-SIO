import express from 'express';
import { createArticles, deleteArticles, getArticles, putArticles, getArticle } from '../controllers/articlesController.js';
import { getCategories } from '../controllers/categoriesController.js';
const app = express();


app.get('/',getArticles);

app.post('/', createArticles);
  
app.delete('/',deleteArticles);

app.put('/',putArticles);

app.get('/:id',getArticle);


export default app