const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const fs = require('fs');

const user = () => {
  // get random number between min to max
  const thumbnail = faker.image.avatar();
  const username = faker.name.findName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const resident = Math.floor(Math.random() * 2);
  return [username, thumbnail, resident, email, password];
};


const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('User, Profile_Picture, Resident, Email,Password\n', 'utf8');


function writeOneMillionUsers(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = user().toString() + '\n';
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

writeOneMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end('users written successfully');
});


