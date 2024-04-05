/*const express = require('express');
const app = express();

// Define a route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('api/membres', (req, res) => {
    // Handle the POST request here
    res.send('Received POST request');
  });

app.get('api/membres/:id', (req, res) => {
    const membreId = req.params.id;
    res.send(`Membre ID: ${membreId}`);
  });
*/
import express from 'express';
import { createMemebres, deleteMembres, getMembres, putMembres, getMembre } from '../controllers/articlesController.js';
const app = express();


app.get('/',getMembres);

app.post('/', createMembres);
  
app.delete('/',deleteMembres);

app.put('/',putMembres);

app.get('/:id',getMembre);

export default app


