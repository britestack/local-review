const { Database, aql } = require('arangojs');
const fs = require('fs');

// review key range
// 23866141
// 33867668

// user key range
// 35271163
// 36271408

const writer = fs.createWriteStream('reviews_users_edge.csv');
writer.write('_to,_from\n', 'utf8');

for (let j = 35271163; j < 36271408; j++) {
  let k = 23866141;
  for (l = 0; l < 10; l++, k++) {
    let userDoc = `users/${j}`;
    let reviewDoc = `reviews/${k}`;
    writer.write(`${userDoc},${reviewDoc}\n`)
  }
}