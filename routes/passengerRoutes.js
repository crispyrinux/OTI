const express = require('express');
const {
  getAllPassengers,
  addPassenger,
  updatePassenger,
  deletePassenger,
} = require('../controllers/passengerController');

const router = express.Router();

router.get('/', getAllPassengers);
router.post('/', addPassenger);
router.put('/:id', updatePassenger);
router.delete('/:id', deletePassenger);

module.exports = router;
