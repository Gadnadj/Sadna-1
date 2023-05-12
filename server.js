const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Student } = require('./db');

const app = express();

// Serve your APIs
app.get('/api', (req, res) => {
  res.send('Hello from API');
});

app.get('/api/test', (req, res) => {
  res.send('Test Hello from Gad Nadjar');
});

// Serve your static front-end files
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware to extract POST request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register a new student
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

// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;

// Add a promise to wait for the server start up to complete
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Export the server for later use
module.exports = server;
