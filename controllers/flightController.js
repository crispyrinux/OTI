const db = require('../config/db');

exports.getAllFlights = async (req, res) => {
  try {
    const [flights] = await db.query('SELECT * FROM flights');
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addFlight = async (req, res) => {
  const { flight_code, origin, destination, price_idr } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO flights (flight_code, origin, destination, price_idr) VALUES (?, ?, ?, ?)',
      [flight_code, origin, destination, price_idr]
    );
    res.status(201).json({ id: result[0].insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

