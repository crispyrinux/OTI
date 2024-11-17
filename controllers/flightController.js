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

exports.updateFlight = async (req, res) => {
  const { id } = req.params;
  const { flight_code, origin, destination, price_idr } = req.body;
  try {
    const result = await db.query(
      'UPDATE flights SET flight_code = ?, origin = ?, destination = ?, price_idr = ? WHERE flight_id = ?',
      [flight_code, origin, destination, price_idr, id]
    );
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.json({ message: 'Flight updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFlight = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM flights WHERE flight_id = ?', [id]);
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.json({ message: 'Flight deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

