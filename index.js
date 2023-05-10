const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json());

// Servez vos fichiers statiques du front-end
app.use(express.static(path.join(__dirname, 'public')));

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
