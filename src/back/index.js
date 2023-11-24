const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  // host: 'localhost'
  dialect: 'sqlite',
  storage: './database.sqlite'
});


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

var friends = TAFFY([
	{"id":1,"gender":"M","first":"John","last":"Smith","city":"Seattle, WA","status":"Active"},
	{"id":2,"gender":"F","first":"Kelly","last":"Ruth","city":"Dallas, TX","status":"Active"},
	{"id":3,"gender":"M","first":"Jeff","last":"Stevenson","city":"Washington, D.C.","status":"Active"},
	{"id":4,"gender":"F","first":"Jennifer","last":"Gill","city":"Seattle, WA","status":"Active"}	
]);
