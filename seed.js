const faker = require('faker');
const { Review, Feature, db } = require('./server/Models/review');

const createFeature = (name) => {
  // get random number between min to max
  let min = 85;
  let max = 129;
  let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  const feature = {};
  feature.name = name;
  feature.liked = randomNumber;
  return feature;
};

const createReview = (n) => {
  const typeGenerator = () => {
    const possibleTypes = ['community','dog owners','parents','commute'];
    const randomNum = Math.floor(Math.random() * 4);
    return possibleTypes[randomNum];
  }
  const urlGenerator = (num) => {
    // get a random picture from s3 and return the link
    // limit is 32 because there're only 32 pics stored on aws-s3 for now
    // const randomNum = Math.floor(Math.random() * 32);
    return `https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-${num}.jpg`
  }
  const colorGenerator = (num) => {
    const colors = {
      0: '#00adbb',
      1: '#fa9668',
      2: '#ceb6ff',
      3: '#740631',
      4: '#f2c430',
      5: '#052286',
      6: '#ff5e3f',
      7: '#00adbb',
      8: '#00adbb',
      9: '#fa9668',
      10: '#ceb6ff',
      11: '#740631',
      12: '#f2c430',
      13: '#052286',
      14: '#ff5e3f',
      15: '#00adbb',
      16: '#00adbb',
      17: '#fa9668',
      18: '#ceb6ff',
      19: '#740631',
      20: '#f2c430',
      21: '#052286'
    }
    return colors[num]
  }
  const review = {};
  review.username = faker.name.findName();
  review.thumbnail = urlGenerator(n); // loading images from aws-S3
  review.resident = faker.random.boolean();
  review.type = typeGenerator();
  review.posted = faker.date.past();
  review.message = faker.lorem.paragraph();
  review.liked = Math.floor(Math.random() * 10);
  review.background = colorGenerator(n);
  return review;
};

// generates 16 features
const getFeatures = () => {
  const possibleFeaturesNames = {
    0: 'It\'s dog friendly',
    1:'There are sidewalks',
    2: 'It\'s walkable to restaurants',
    3: 'It\'s walkable to grocery stores',
    4: 'People would walk alone at night',
    5: 'Streets are well-lit',
    6: 'Kids play outside',
    7: 'There\'s holiday spirit',
    8: 'It\'s quiet',
    9: 'Neighbors are friendly',
    10: 'They plan to stay for at least 5 years',
    11: 'Parking is easy',
    12: 'Car is needed',
    13: 'There\'s wildlife',
    14: 'Yards are well-kept',
    15: 'There are community events'
  };
  const sampleFeatures = [];
  for (let i = 0; i < 16; i++) {
    const newFeature = createFeature(possibleFeaturesNames[i]);
    sampleFeatures.push(newFeature);
  }
  return sampleFeatures;
};

const getReviews = (num) => {
  // num should be lesser than 32 because there're only 32 pic stored on s-3 for now
  const sampleReviews = [];
  for (let i = 0; i < num; i++) {
    const newReview = createReview(i);
    sampleReviews.push(newReview);
  }
  return sampleReviews;
};

const seedData = (num) => {
  db.dropDatabase((err, result) => {
    if(err) console.log('err: ', err);
    else {
      console.log('Dropped old data')
    }
  });
  Feature.create(getFeatures(), (err) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('New features are set');
    }
  });
  Review.create(getReviews(num), (err) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('New reviews are set and connection closed');
      db.close();
    }
  });
};

// num should be lesser than 32 because there're only 32 pic stored on s-3 for now
seedData(21);
