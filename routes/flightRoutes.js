
const express = require('express');
const { getAllFlights, addFlight, updateFlight, deleteFlight } = require('../controllers/flightController');
const { verifyToken } = require('../controllers/authController');

const router = express.Router();

router.get('/', verifyToken, getAllFlights);
router.post('/', verifyToken, addFlight);
router.put('/:id', verifyToken, updateFlight);
router.delete('/:id', verifyToken, deleteFlight);

module.exports = router;
