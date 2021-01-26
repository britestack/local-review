const express = require('express');
require('dotenv').config();
const ReviewRoute = require('./Routes/review.controller');
const FeatureRoute = require('./Routes/feature.controller');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.static('public'));

app.use('/reviews', ReviewRoute);
app.use('/features', FeatureRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
