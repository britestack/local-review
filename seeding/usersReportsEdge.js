const { Database, aql } = require('arangojs');
const fs = require('fs');

// user key range
// 35271163
// 36271408

// report key range
// 36272886
// 46273452

const writer = fs.createWriteStream('users_reports_edge.csv');
writer.write('_to,_from\n', 'utf8');

for (let j = 35271163; j < 36271408; j++) {
  let k = 36272886;
  for (l = 0; l < 10; l++, k++) {
    let userDoc = `users/${j}`;
    let reportDoc = `reports/${k}`;
    writer.write(`${reportDoc},${userDoc}\n`)
  }
}