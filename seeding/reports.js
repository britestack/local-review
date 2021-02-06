const faker = require('faker');
const { Review, Feature, db } = require('../server/Models/review');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const flag = () => {
  // get random number between min to max
  let randomPercentage = Math.random() * 100;
  if (randomPercentage < 1) {
    return Math.floor(Math.random() * 30);
  }
  return 0;
};

const reportList = () => {
  const sampleFlags = ['inappropriate', 'not_relevant', 'spam', 'duplicate_content'];
  const reportList = {};
  for (let i = 0; i < 4; i++) {
    const newFlag = flag(sampleFlags[i]);
    reportList[sampleFlags[i]] = newFlag;
  }
  return reportList;
}


const getReports = (num) => {
  const sampleReports = [];
  for (let i = 0; i < num; i++) {
    sampleReports.push(reportList());
  }
  return sampleReports;
}


const reportsWriter = createCsvWriter({
  path: 'reports.csv',
  header: [
    {id: 'inappropriate', title: 'Inappropriate'},
    {id: 'not_relevant', title: 'Not Relevant'},
    {id: 'spam', title: 'Spam'},
    {id: 'duplicate_content', title: 'Duplicate Content'},
  ]
});

reportsWriter
  .writeRecords(getReports(10000000))
  .then(()=> console.log('reports.csv has been written successfully'))

