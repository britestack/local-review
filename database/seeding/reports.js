const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const fs = require('fs');

const flag = () => {
  // get random number between min to max
  let randomPercentage = Math.random() * 100;
  if (randomPercentage < 1) {
    return Math.floor(Math.random() * 30);
  }
  return 0;
};

const reportList = () => {
  const reportList = [];
  for (let i = 0; i < 4; i++) {
    reportList.push(flag());
  }
  return reportList.toString() + '\n';
}

const writeReports = fs.createWriteStream('reports.csv');
writeReports.write('Inappropriate, Not_Relevant, Spam, Duplicate_Content\n', 'utf8');


function writeTenMillionReports(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = reportList();
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

writeTenMillionReports(writeReports, 'utf-8', () => {
  writeReports.end();
});
