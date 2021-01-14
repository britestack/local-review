const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ReviewRoute = require('./Routes/review.controller');
require('dotenv').config({path: 'variables.env'});

const PORT = process.env.PORT;

app.use(express.static('public'));

app.use('/reviews', ReviewRoute);

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true} ,() => {
  console.log('Connected to MongoDB');
});

const db = mongoose.connection;

db.on('error', () => console.log('Error connection to MongoDB'));

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});