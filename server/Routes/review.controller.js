const Review = require('../Models/review');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('hello from reviews route');
});

router.post ('/', async (req, res) => {
  // here get user input and make it an object
  const newReview = new Review({
    name: 'Test#9'
  });
  try{
    const saved = await newReview.save();
    res.status(201).send(saved);
  }catch(err){
    res.status(400).send(err);
  }
});

module.exports = router;