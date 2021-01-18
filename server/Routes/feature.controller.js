const express = require('express');
const { Feature } = require('../Models/review');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).send(features);
  } catch (err) {
    console.log('err: ', err);
  }
});

// Feature does not need to have POST, PATCH, DELETE requests
// but it's there just in case 

router.post('/', async (req, res) => {
  const newFeature = new Feature({
    name: req.body.name,
    liked: req.body.liked,
  });
  try {
    newFeature.save();
    res.status(201).send('saved');
  } catch (err) {
    res.status(400).send(err);
  }
});
router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const updateObj = {
    name: req.body.name,
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
    const deleted = await Feature.findByIdAndDelete(id);
    res.status(200).send('deleted');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
