/* eslint-disable max-len */
const { Features, Contents } = require('./server/Models/review');

const contents = [
  {
    username: 'Barry Allen', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'Tony Stark', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'Tony Stark', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'Barry Allen', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'James Bond', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'James Bond', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'James Bond', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'James Bond', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
  {
    username: 'Barry Allen', liked: 329, thumbnails: 'someUrl', resident: false, type: 'community', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, autem?',
  },
];

const features = [
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 35,

  },
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 22,

  },
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 39,

  },
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 35,

  },
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 3,

  },
  {
    content: 'Lorem ipsum dolor sit',
    totalVotes: 130,
    liked: 5,

  },
];

const seed = async (featuresArray, contentsArray) => {
  await Features.create(featuresArray)
    .then(async () => {
      await Contents.create(contentsArray);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

seed(features, contents);
