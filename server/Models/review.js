const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
  content: String,
  totalVotes: Number,
  liked: Number,
});

const ContentSchema = new mongoose.Schema({
  username: String,
  thumbnails: String,
  resident: Boolean,
  type: String,
  posted: {
    type: Date,
    default: Date.now,
  },
  message: String,
  liked: Number,
});

const Features = mongoose.model('feature', FeatureSchema);
const Contents = mongoose.model('content', ContentSchema);

module.exports = {
  Features,
  Contents,
};
