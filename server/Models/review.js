const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const FeatureSchema = new mongoose.Schema({
  name: String,
  liked: Number,
});

const ReviewSchema = new mongoose.Schema({
  username: String,
  thumbnail: String,
  resident: Boolean,
  type: String,
  posted: {
    type: Date,
    default: Date.now,
  },
  message: String,
  liked: Number,
  background: String
});

const Feature = mongoose.model('feature', FeatureSchema);
const Review = mongoose.model('review', ReviewSchema);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to MongoDB');
});

const db = mongoose.connection;

db.on('error', () => { console.log('Error connection to MongoDB'); });

module.exports = {
  Feature,
  Review,
  db,
};
