const { Database, aql } = require('arangojs');
const fs = require('fs');

// review key range
// 23866141
// 33867668

// user key range
// 35271163
// 36271408

// report key range
// 36272886
// 46273452

const writer = fs.createWriteStream('reviews_reports_edge.csv');
writer.write('_to,_from\n', 'utf8');

let k = 36272886;
for (let j = 23866141; j < 33867668, k < 46273452; k++, j++) {
  let reviewDoc = `reviews/${j}`;
  let reportDoc = `reports/${k}`;
  writer.write(`${reportDoc},${reviewDoc}\n`)
}