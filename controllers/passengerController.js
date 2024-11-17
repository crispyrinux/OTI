const db = require('../config/db');

exports.getAllPassengers = async (req, res) => {
  try {
    const [passengers] = await db.query('SELECT * FROM passengers');
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPassenger = async (req, res) => {
  const { name, email, phone_number } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO passengers (name, email, phone_number) VALUES (?, ?, ?)',
      [name, email, phone_number]
    );
    res.status(201).json({ id: result[0].insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
