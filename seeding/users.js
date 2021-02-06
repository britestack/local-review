const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const user = () => {
  // get random number between min to max
  const thumbnail = faker.image.avatar();
  const username = faker.name.findName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const resident = Math.floor(Math.random() * 2);
  return {username, thumbnail, resident, email, password};
};

const getUsers = (num) => {
  const sampleUsers = [];
  for (let i = 0; i < num; i++) {
    sampleUsers.push(user())
  }
  return sampleUsers;
}

const usersWriter = createCsvWriter({
  path: 'users.csv',
  header: [
    {id: 'username', title: 'User'},
    {id: 'thumbnail', title: 'Profile Picture'},
    {id: 'resident', title: 'Resident'},
    {id: 'email', title: 'Email'},
    {id: 'password', title: 'Password'},
  ]
});

usersWriter
  .writeRecords(getUsers(21))
  .then(()=> console.log('CSV has been written successfully'))

