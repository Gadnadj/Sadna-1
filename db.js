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

module.exports = { Student };
