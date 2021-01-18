const faker = require('faker');
const path = require('path');
const fs = require('fs');
const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand
} = require("@aws-sdk/client-s3");
const { Review, Feature, db } = require('./server/Models/review');

const createFeature = () => {
  const feature = {};
  feature.name = faker.lorem.words();
  feature.liked = Math.floor(Math.random() * 130); 
  return feature;
};

// fs.writeFileSync(path.join(__dirname,''), people, (err, docs) => {
//   if(err) console.log(err);
//   else {
//     console.log('file written: ', docs);
//   }
// })

const createReview = () => {
  const typeGenerator = () => {
    const possibleTypes = ['community','dog owners','parents','commute'];
    const randomNum = Math.floor(Math.random() * 4);
    return possibleTypes[randomNum];
  }
  const review = {};
  review.username = faker.name.findName();
  review.thumbnail = faker.image.people(); // get images and load it to S3, then use it for url
  review.resident = faker.random.boolean();
  review.type = typeGenerator(); 
  review.posted = faker.date.past();
  review.message = faker.lorem.sentence();
  review.liked = Math.floor(Math.random() * 10); 
  return review;
};

// generates 16 random features 
const getFeatures = () => {
  const sampleFeatures = [];
  for (let i = 0; i < 16; i ++) {
    const newFeature = createFeature();
    sampleFeatures.push(newFeature);
  }
  return sampleFeatures;
};

const getReviews = (num) => {
  const sampleReviews = [];
  for (let i = 0; i < num; i ++) {
    const newReview = createReview();
    sampleReviews.push(newReview);
  }
  return sampleReviews;
};

const seedData = (num) => {
  Feature.create(getFeatures(), (err) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('features are set');
    }
  });
  Review.create(getReviews(num), (err) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('reviews are set');
      db.close();
    }
  });
};

seedData(21);
