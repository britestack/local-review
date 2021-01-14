const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  features: [{
    content: String,
    total_votes: Number,
    liked: Number
  }],
  contents: [{
    username: String,
    thumbnails: String,
    resident: Boolean,
    type: String,
    posted: {
      type: Date,
      default: Date.now
    },
    message: String,
    liked: Number
  }]
});

module.exports = mongoose.model('Review', ReviewSchema);