const express = require('express');
const { getAllPassengers, addPassenger } = require('../controllers/passengerController');

const router = express.Router();

router.get('/', getAllPassengers);
router.post('/', addPassenger);

module.exports = router;
