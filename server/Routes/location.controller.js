const { aql } = require('arangojs');
const express = require('express')
const db = require('../../database/index.js');

const router = express.Router();

const locationDoc = db.collection('locations');
const locationGr = db.collection('locations_reviews_edge');

router.get('/', async(req, res) => {
  const randId = Math.floor(Math.random() * 200000);
  
  const q = await db.query(aql`
    FOR l IN ${locationDoc}
      FILTER l._key == ${randId}
      LIMIT 1
      RETURN l
  `)
  .then((cursor) => cursor.map((location) => location))

  res.send(q);
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const q = await db.query(aql`
    FOR l IN ${locationDoc}
      FILTER l._key == ${id}
      LIMIT 1
      RETURN l
  `)
  .then((cursor) => cursor.map((location) => location))

  res.send(q);
})

router.get('/:id/reviews', async (req, res) => {
  const id = 'locations/' + req.params.id;

  const q = await db.query(aql`
    FOR v IN 1..1 OUTBOUND ${id} ${locationGr}
      RETURN v
  `)
  .then((cursor) => cursor.map((reviews) => reviews))

  res.send(q)
});

module.exports = router;
