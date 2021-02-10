const { aql } = require('arangojs');
const express = require('express')
const db = require('../../database/index.js');

const router = express.Router();

const locationDoc = db.collection('locations');
const locationGr = db.collection('locations_reviews_edge');

router.get('/:id', async (req, res) => {
  const id = 'locations/' + req.params.id;
  console.log(id)

  const edgeQ = await (db.query(aql`
    FOR v IN 1..1 OUTBOUND ${id} ${locationGr}
      RETURN v
  `
  ))
  .then((cursor) => cursor.map((reviews) => reviews))
  console.log(edgeQ)
  res.send()
});

module.exports = router;
