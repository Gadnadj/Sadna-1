require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Student } = require('./db');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static front-end files
app.use(express.static(path.join(__dirname, 'public')));

// Set up the database
const dbUri = process.env.MONGODB_URI;

// Connect to the database
mongoose
  .connect(
    dbUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
