const { Database, aql } = require('arangojs');
// const csv = require('csv-parser');
// const fs = require('fs');
// const locations = require('../locations_small.csv');
// const reports = require('../reports_small.csv');
// const reviews = require('../reviews_small.csv');
// const users = require('../users_small.csv');

const db = new Database({
  url: "http://localhost:8529",
  databaseName: '_system',
});

// db.createDatabase('local-review', (err) => {
//   if (err) {
//     return console.error('Failed to create database: ', err);
//   }
//   console.log('database created');
// })

db.useDatabase('_system');

// Location

const reviewSmallCollection = db.collection('reviews_small');

const result = db.query(aql`
  FOR r IN ${reviewSmallCollection}
  RETURN r
`)
.then((cursor) => cursor.forEach((review) => console.log(review)));


// locationCollection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)
// );


// // Review

// const reviewCollection = db.collection('review');

// reviewCollection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)
// );


// // User

// const userCollection = db.collection('user');

// userCollection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)
// );


// // Report

// const reportCollection = db.collection('report');

// reportCollection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)
// );
