const express = require('express');
const path = require('path');

const app = express();

// Servez vos API
app.get('/api', (req, res) => {
  res.send('Hello from API');
});
app.get('/api/test', (req, res) => {
  res.send('Test Hello from Gad Nadjar');
});

// Servez vos fichiers statiques du front-end
app.use(express.static(path.join(__dirname, 'public')));
// with front
module.exports = app;
