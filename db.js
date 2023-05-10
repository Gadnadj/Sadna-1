const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade1: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  grade2: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  grade3: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };
