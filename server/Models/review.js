const mongoose = require('mongoose');

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

const Feature = mongoose.model('features', FeatureSchema);
const Review = mongoose.model('reviews', ReviewSchema);

mongoose.connect('mongodb://localhost/review', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => { console.log('Error connection to MongoDB'); });

module.exports = {
  Feature,
  Review,
  db,
};
