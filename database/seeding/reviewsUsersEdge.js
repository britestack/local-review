const { seedGraph } = require('../seedGraph.js');

seedGraph('reviews_users_edge.csv', 10, 'reviews', 'users');
