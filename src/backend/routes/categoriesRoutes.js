import express from 'express';
import { createCategories, deleteCategories, getCategorie, putCategories, getCategories, putCategories } from '../controllers/categoriesController.js';
import { getCategories } from '../controllers/categoriesController.js';
const app = express();

// Define a route for handling GET requests to the root URL
app.get ('/', getCategorie);

app.post('/', putCategories);

app.delete('/', deleteCategories); 

app.get('/:id', getCategories);

app.put('/:id', putCategories);


export default app