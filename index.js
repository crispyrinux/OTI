const express = require('express');
const bodyParser = require('body-parser');
const flightRoutes = require('./routes/flightRoutes');
const passengerRoutes = require('./routes/passengerRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/flights', flightRoutes);
app.use('/api/passengers', passengerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
