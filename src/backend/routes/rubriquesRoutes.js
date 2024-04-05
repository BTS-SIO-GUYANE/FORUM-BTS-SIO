import express from 'express';
import { createRubriques, deleteRubriques, getRubriques, putRubriques, getRubrique } from '../controllers/articlesController.js';
const app = express();


app.get('/',getRubriques);

app.post('/', createRubriques);
  
app.delete('/',deleteRubriques);

app.put('/',putRubriques);

app.get('/:id',getRubrique);

export default app