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

// const backgroundGenerator = () => {
//   const backgroundColors = ['rgb(0, 173, 187)', 'rgb(250, 140, 104)', 'rgb(206, 182, 255)', 'rgb(116, 6, 49)', 'rgb(242, 196, 48)', 'rgb(5, 34, 134)', 'rgb(255, 94, 63)'];
//   const popped = backgroundColors.pop();
//   console.log('backgroundColors: ',backgroundColors, 'popped: ', popped);
// }

// backgroundGenerator();


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

  // const backgroundGenerator = () => {
  //   const backgroundColors = ['rgb(0, 173, 187)', 'rgb(250, 140, 104)', 'rgb(206, 182, 255)', 'rgb(116, 6, 49)', 'rgb(242, 196, 48)', 'rgb(5, 34, 134)', 'rgb(255, 94, 63)'];
  //   const popped = backgroundColors.pop();
  //   console.log('backgroundColors: ',backgroundColors, 'popped: ', popped);
  // }

  // backgroundGenerator
  const review = {};
  review.username = faker.name.findName();
  review.thumbnail = urlGenerator(n); // loading images from aws-S3
  review.resident = faker.random.boolean();
  review.type = typeGenerator();
  review.posted = faker.date.past();
  review.message = faker.lorem.sentence();
  review.liked = Math.floor(Math.random() * 10);
  return review;
};

// generates 16 features
const getFeatures = () => {
  const possibleFeaturesNames = [
  'It\'s dog friendly',
  'There are sidewalks',
  'It\'s walkable to restaurants',
  'It\'s walkable to grocery stores',
  'People would walk alone at night',
  'Streets are well-lit',
  'Kids play outside',
  'There\'s holiday spirit',
  'Neighbors are friendly',
  'It\'s quiet',
  'They plan to stay for at least 5 years',
  'Parking is easy',
  'Car is needed',
  'There\'s wildlife',
  'Yards are well-kept',
  'There are community events'
  ];
  const sampleFeatures = [];
  for (let i = 0; i < 16; i ++) {
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
// seedData(21);
