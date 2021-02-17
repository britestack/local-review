const { aql } = require('arangojs');
const express = require('express')
const db = require('../../database/index.js');

const router = express.Router();

const userDoc = db.collection('users');
const userReportsGr = db.collection('reports_users_edge');
const userReviewsGr = db.collection('reviews_users_edge');


router.get('/', async (req, res) => {
  const randId = Math.floor(Math.random() * 1000000);

  const q = await db.query(aql`
    FOR l IN ${userDoc}
      FILTER l._key == ${randId}
      LIMIT 1
      RETURN l
  `)
  .then((cursor) => cursor.map((user) => user))

  res.send(q);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const q = await db.query(aql`
    FOR l IN ${userDoc}
      FILTER l._key == ${id}
      LIMIT 1
      RETURN l
  `)
  .then((cursor) => cursor.map((user) => user))

  res.send(q);
});

router.get('/:id/reviews', async (req, res) => {
  const id = 'users/' + req.params.id;

  const q = await db.query(aql`
    FOR v IN 1..1 OUTBOUND ${id} ${userReviewsGr}
      RETURN v
  `)
  .then((cursor) => cursor.map((reviews) => reviews))

  res.send(q)
});

router.get('/:id/reports', async (req, res) => {
  const id = 'users/' + req.params.id;

  const q = await db.query(aql`
    FOR v IN 1..1 OUTBOUND ${id} ${userReportsGr}
      RETURN v
  `)
  .then((cursor) => cursor.map((reports) => reports))

  res.send(q)
});


// POST requests

router.post('/', async (req, res) => {
  const newUserId = await db.query(aql`
    INSERT {
      Type: ${type},
      DatePosted: ${datePosted},
      Content: ${content},
      Likes: "0"
    } INTO ${userDoc}
    LET inserted = NEW
    RETURN inserted._id
  `)
  .then((cursor) => cursor.map((newUser) => newUser));
});

module.exports = router;
