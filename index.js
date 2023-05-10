const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { Student } = require('./db');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json());

// Servez vos API
app.get('/api', (req, res) => {
  res.send('Hello from API');
});

app.get('/api/test', (req, res) => {
  res.send('Test Hello from Gad Nadjar');
});

// Servez vos fichiers statiques du front-end
app.use(express.static(path.join(__dirname, 'public')));

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

// Obtenir tous les étudiants
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Connexion à la base de données
mongoose
  .connect(
    'mongodb+srv://gadnadjar:civ7vt39@cluster0.8zbfkva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
