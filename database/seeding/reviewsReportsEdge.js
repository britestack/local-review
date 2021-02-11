const { seedGraph } = require('../seedGraph.js');

seedGraph('reviews_reports_edge.csv', 1, 'reviews', 'reports');
