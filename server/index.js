/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
const { Features, Contents } = require('./Models/review');
const ReviewRoute = require('./Routes/review.controller');
const { contents, features } = require('../seed');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/reviews', ReviewRoute);

// eslint-disable-next-line max-len
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  // populate data if it's empty
  Features.create(features)
    .then(result => {
      Contents.create(contents);
    })
    .catch(err => {
      console.log('err: ', err);
    });
  console.log('Connected to MongoDB');
});

const db = mongoose.connection;

db.on('error', () => { console.log('Error connection to MongoDB'); });

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
