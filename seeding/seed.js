const { Database, aql } = require('arangojs');
const fs = require('fs');
// const csv = require('csv-parser');
// const fs = require('fs');
// const locations = require('../locations_small.csv');
// const reports = require('../reports_small.csv');
// const reviews = require('../reviews_small.csv');
// const users = require('../users_small.csv');

// const db = new Database({
//   url: "http://localhost:8529",
//   databaseName: '_system',
// });

// db.createDatabase('local-review', (err) => {
//   if (err) {
//     return console.error('Failed to create database: ', err);
//   }
//   console.log('database created');
// })

// db.useDatabase('_system');

// const seedReviewNodes = () => {
//   // const locations = await db.query(aql`
//   //   FOR l IN ${locationCollection}
//   //   RETURN l._key
//   // `);
//   // const reviews = await db.query(aql`
//   //   FOR r IN ${reviewCollection}
//   //   RETURN r
//   // `)

//   // locations.forEach((location) => )

// }

// seedReviewNodes()


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
