const express = require('express');
// const { Features, Contents } = require('../Models/review');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('hello from reviews route');
});

router.post('/', async (req, res) => {
  // here get user input and make it an object
  // const newReview = new Review({
  //   name: 'Test#9',
  // });
  // try {
  //   const saved = await newReview.save();
  //   res.status(201).send(saved);
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});
router.patch('/:id', async (req, res) => {
  try {
    // const updated = await newReview.save();
    res.status(200).send('updated');
  } catch (err) {
    res.status(400).send(err);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  // try {
  //   const deleted = await Review.findByIdAndDelete(id);
  //   res.status(200).send(deleted);
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

module.exports = router;
