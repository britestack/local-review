const { seedGraph } = require('../seedGraph.js');

seedGraph('reviews_locations_edge.csv', 80, 'reviews', 'locations');
