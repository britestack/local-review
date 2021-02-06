const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const feature = () => {
  // get random number between min to max
  let min = 85;
  let max = 129;
  let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  return randomNumber;
};

// generates 16 features
const location = () => {
  const sampleFeatures = ['walk_groceries', 'kids_outside', 'quiet', 'car_req', 'comm_events', 'sidewalks', 'walk_at_night', 'wildlife', 'walk_res', 'streets_lit', 'neighbors_friendly', 'park_friendly', 'plan_5_yrs', 'well_kept_yards', 'holiday_spirit', 'dog_friendly'];
  const locationFeatures = {};
  locationFeatures.location_name = faker.address.city();
  for (let i = 0; i < 16; i++) {
    const newFeature = feature(sampleFeatures[i]);
    locationFeatures[sampleFeatures[i]] = newFeature;
  }
  return locationFeatures;
}


const getLocations = (num) => {
  const sampleLocations = [];
  for (let i = 0; i < num; i++) {
    sampleLocations.push(location())
  }
  return sampleLocations;
}


const locationWriter = createCsvWriter({
  path: 'location.csv',
  header: [
    {id: 'location_name', title: 'location'},
    {id: 'walk_groceries', title: 'Walkable to grocery stores'},
    {id: 'sidewalks', title: 'Sidewalks'},
    {id: 'wildlife', title: 'Wildlife'},
    {id: 'plan_5_yrs', title: 'Stay for at least 5 years'},
    {id: 'neighbors_friendly', title: 'Neighbors are friendly'},
    {id: 'comm_events', title: 'Community Events'},
    {id: 'dog_friendly', title: 'Dog Friendly'},
    {id: 'walk_at_night', title: 'Walk At Night'},
    {id: 'holiday_spirit', title: 'Holiday Spirit'},
    {id: 'kids_outside', title: 'Kids Outside'},
    {id: 'park_friendly', title: 'Parking is Easy'},
    {id: 'walk_res', title: 'Walkable Restaurants'},
    {id: 'streets_lit', title: 'Streets Lit'},
    {id: 'quiet', title: 'Quiet'},
    {id: 'car_req', title: 'Car Needed'},
    {id: 'well_kept_yards', title: 'Well Kept Yards'},
  ]
});

locationWriter
  .writeRecords(getLocations(10000000))
  .then(()=> console.log('locations.csv has been written successfully'))
