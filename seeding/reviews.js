const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createReview = (n) => {
  const typeGenerator = () => {
    const possibleTypes = ['community','dogOwners','parents','commute'];
    const randomNum = Math.floor(Math.random() * 4);
    return possibleTypes[randomNum];
  }

  const messageGenerator = () => {
    const messages = ["They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
    "Close to the water. Great amenities and shops and restaurants. Can’t beat the view. Walker friendly.",
    "Proximity to water / open space. Pride of ownership... Christmas trees in most windows in the winter. Walkable to restaurants / bars / grocery stores.",
    "They’d love it! Everyone here has a dog. Very dog friendly community. Plenty of parks for your furkid to run around at, not to mention Crissy Fields Beach is dog friendly.",
    "There is so much outdoor space for kids here - parks, the beach, fort mason. The library is great. And it’s super walkable! Everything we need is within walking distance. We love living in the marina!",
    "Just moved in but very pleasantly surprised. It’s really easy walking and plenty within a stones throw.",
    "I’m not a parent. Hard for me to say. But the neighborhood is safer than most and is walkable. Good school Claire Lilienthal - but hard to get into",
    "Great place to walk your dog, hang out in the park, or walk through downtown Marina to local shops/stores.",
    "Great weather, restaurants and bars all within walking distance. Favorite neighborhood in the city.",
    "Great neighborhood for a family. Walk everywhere, we rarely use a car on the weekends at all. Lived here for 20 years!",
    "I love how close it is to hop onto 101. I SUP in Sausalito so it’s so easy to zip over and get out of the city. The architecture is amazing and every building or home is so unique to its self. Marina Green, Yacht Club and East Beach all walking distance.",
    "It’s flat and very easy to walk with stroller and toddler, close to Crissy field so nice, Love chestnut and it’s tons of restaurants and shops, very clean and seems so safe... mostly no fog!!!! The pe open are love and relax! They are a lot of young families... it’s beautiful A bit too expensive...",
    "The Marina's unique spots include the Palace of Fine Arts—the only physical reminder of the 1915 Panama-Pacific Exposition—and Crissy Field, a relaxing, natural open space.",
    "The scenery is breathtaking, and there are parks within walking distance. The Marina Green is a great place to walk and get great shots of the Golden Gate Bridge, which you can walk across. The local retail stores are easy to get to, and mass transit is available to take you to the downtown area.",
    "There are lots of young families but also lots of young recent college grads. You can walk from the beach to the boutiques on Union Street in 7 minutes.",
    "Dog owners will love how many parks and green areas there are. But there are not free poop bag boxes around the neighborhood, and not many trashcans unless you're near a park."
  ];
    const randomNum = Math.floor(Math.random() * 16);
    return messages[randomNum];
  }
  const review = {};
  review.username = faker.name.findName();
  review.type = typeGenerator();
  review.postedDate = faker.date.past();
  review.reviewContent = messageGenerator(); // generate custom random reviews
  review.liked = Math.floor(Math.random() * 10);
  return review;
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

const reviewsWriter = createCsvWriter({
  path: 'reviews.csv',
  header: [
    {id: 'reviewContent', title: 'Content'},
    {id: 'postedDate', title: 'Date Posted'},
    {id: 'type', title: 'Type'},
    {id: 'liked', title: 'Likes'},
    {id: 'parent', title: 'Parent'},
  ]
});

reviewsWriter
  .writeRecords(getReviews(21))
  .then(()=> console.log('CSV has been written successfully'))
// num should be lesser than 32 because there're only 32 pic stored on s-3 for now
