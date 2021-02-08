const { Database, aql } = require('arangojs');
const fs = require('fs');

// review key range
// 23866141
// 33867668

// location key range
// 34070837
// 34270870

// user key range
// 35271163
// 36271408

const writer = fs.createWriteStream('locations_edge.csv');
writer.write('_to,_from\n', 'utf8');

const randomUser = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let j = 34070837; j < 34270870; j++) {
  let k = 23866141;
  for (l = 0; l < 50; l++, k++) {
    let locationDoc = `locations/${j}`;
    let reviewDoc = `reviews/${k}`;
    writer.write(`${reviewDoc},${locationDoc}\n`)
  }
}
