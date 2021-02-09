const { Database, aql } = require('arangojs');

const db = new Database({
  url: "http://localhost:8529",
  databaseName: 'sdc',
});

db.useDatabase('sdc');

module.exports = db;