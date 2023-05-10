const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Student } = require('./db');

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

// Utilisez le middleware body-parser pour extraire les données de la requête POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enregistrer un nouvel étudiant
app.post('/api/students', async (req, res) => {
  try {
    const { name, grade1, grade2, grade3 } = req.body;
    const student = new Student({ name, grade1, grade2, grade3 });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtenirr tous les étudiants
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;

// Ajouter une promesse pour attendre la fin du démarrage du serveur
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Exporter le serveur pour une utilisation ultérieure
module.exports = server;
