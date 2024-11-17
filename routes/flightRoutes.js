const express = require('express');
const { getAllFlights, addFlight, deleteFlight } = require('../controllers/flightController');


const router = express.Router();

router.get('/', getAllFlights);
router.post('/', addFlight);

module.exports = router;

