const { aql } = require('arangojs');
const express = require('express')
const db = require('../../database/index.js');

const router = express.Router();

const reviewDoc = db.collection('reviews');
const reviewReportsGr = db.collection('reviews_reports_edge');
const reviewUserGr = db.collection('reviews_users_edge');


router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const q = await db.query(aql`
    FOR r IN ${reviewDoc}
      FILTER r._key == ${id}
      LIMIT 1
      RETURN r
  `)
  .then((cursor) => cursor.map((review) => review))

  res.send(q);
})

router.get('/:id/user', async (req, res) => {
  const id = 'reviews/' + req.params.id;

  const q = await db.query(aql`
    FOR v IN 1..1 INBOUND ${id} ${reviewUserGr}
      RETURN v
  `)
  .then((cursor) => cursor.map((reviews) => reviews))

  res.send(q)
});

router.get('/:id/reports', async (req, res) => {
  const id = 'reviews/' + req.params.id;

  const q = await db.query(aql`
    FOR v IN 1..1 INBOUND ${id} ${reviewReportsGr}
      RETURN v
  `)
  .then((cursor) => cursor.map((reports) => reports))

  res.send(q)
});

module.exports = router;
