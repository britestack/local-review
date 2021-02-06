const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const fs = require('fs');

const feature = () => {
  // get random number between min to max
  let min = 5;
  let max = 99;
  let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  return randomNumber;
};

// generates 16 features
const location = () => {
  const locationFeatures = [];
  locationFeatures.push(faker.address.city());
  for (let i = 0; i < 16; i++) {
    locationFeatures.push(feature());
  }
  return locationFeatures.toString() + '\n';
}


const writeLocations = fs.createWriteStream('locations.csv');
writeLocations.write('walk_groceries, kids_outside, quiet, car_req, comm_events, sidewalks, walk_at_night, wildlife, walk_res, streets_lit, neighbors_friendly, park_friendly, plan_5_yrs, well_kept_yards, holiday_spirit, dog_friendly\n', 'utf8');


function writeTenMillionLocations(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = location();
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionLocations(writeLocations, 'utf-8', () => {
  writeLocations.end();
});
