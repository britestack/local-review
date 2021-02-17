const { aql } = require('arangojs');
const express = require('express')
const db = require('../../database/index.js');

const router = express.Router();


// Collections


const reviewDoc = db.collection('reviews');

const reportDoc = db.collection('reports');

const reviewReportsGr = db.collection('reviews_reports_edge');

const reviewUserGr = db.collection('reviews_users_edge');

const locationReviewsGr = db.collection('locations_reviews_edge');


// GET requests

router.get('/', async (req, res) => {
  const randId = Math.floor(Math.random() * 10000000);

  const q = await db.query(aql`
    FOR r IN ${reviewDoc}
      FILTER r._key == ${randId}
      LIMIT 1
      RETURN r
  `)
  .then((cursor) => cursor.map((review) => review))

  res.send(q);
})

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


// POST requests

router.post('/:locationId/:userId', async (req, res) => {
  const locationId = 'locations/' + req.params.locationId;
  const userId = 'users/' + req.params.userId;
  const { type, datePosted, content } = req.body;

  const newReviewId = await db.query(aql`
    INSERT {
      Type: ${type},
      DatePosted: ${datePosted},
      Content: ${content},
      Likes: "0"
    } INTO ${reviewDoc}
    LET inserted = NEW
    RETURN inserted._id
  `)
  .then((cursor) => cursor.map((newReview) => newReview));

  const insertIntoUserReviewsGr = await db.query(aql`
    INSERT { _from: ${userId}, _to: ${newReviewId[0]} } INTO ${reviewUserGr}
  `)

  const insertIntoLocationReviewsGr = await db.query(aql`
    INSERT { _from: ${locationId}, _to: ${newReviewId[0]} } INTO ${locationReviewsGr}
  `)

  const newReportId = await db.query(aql`
    INSERT {
      Inappropriate: "0",
      NotRelevant: "0",
      Spam: "0",
      DuplicateContent: "0"
    } INTO ${reportDoc}
    LET inserted = NEW
    RETURN inserted._id
  `)
  .then((cursor) => cursor.map((newReport) => newReport));

  const insertIntoReviewReportsGr = await db.query(aql`
    INSERT { _from: ${newReportId[0]}, _to: ${newReviewId[0]} } INTO ${reviewReportsGr}
  `);

  res.send(newReviewId);
})

module.exports = router;
