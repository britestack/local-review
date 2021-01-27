const express = require('express');
const cors = require('cors');
const ReviewRoute = require('./Routes/review.controller');
const FeatureRoute = require('./Routes/feature.controller');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.static('public'));

app.use('/reviews', ReviewRoute);
app.use('/features', FeatureRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
