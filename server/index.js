const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const ReviewRoute = require('./routes/review.controller');
const LocationRoute = require('./routes/location.controller');
const ReportRoute = require('./routes/report.controller');
const UserRoute = require('./routes/user.controller');


const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/reviews', ReviewRoute);
app.use('/api/locations', LocationRoute);
// app.use('/api/reports', FeatureRoute);
app.use('/api/users', UserRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
