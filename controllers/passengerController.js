const db = require('../config/db');

exports.updatePassenger = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone_number } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE passengers SET name = ?, email = ?, phone_number = ? WHERE passenger_id = ?',
      [name, email, phone_number, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Passenger not found' });
    }

    res.json({ message: 'Passenger updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePassenger = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query(
      'DELETE FROM passengers WHERE passenger_id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Passenger not found' });
    }

    res.json({ message: 'Passenger deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
