const express = require('express');
const { Review } = require('../Models/review');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const review = await Review.findById(id);
    res.status(200).send(review);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  // Get user input and make it an object
  const newReview = new Review({
    username: req.body.username,
    thumbnail: req.body.thumbnail,
    resident: req.body.resident,
    type: req.body.type,
    posted: req.body.posted,
    message: req.body.message,
    liked: req.body.liked,
  });
  try {
    const saved = await newReview.save();
    res.status(201).send('saved');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const updateObj = {
    username: req.body.username,
    thumbnail: req.body.thumbnail,
    resident: req.body.resident,
    type: req.body.type,
    posted: req.body.posted,
    message: req.body.message,
    liked: req.body.liked,
  };
  try {
    const updated = await Feature.findByIdAndUpdate(id, updateObj);
    res.status(200).send('updated');
  } catch (err) {
    res.status(400).send(err);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Review.findByIdAndDelete(id);
    res.status(200).send(deleted);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
