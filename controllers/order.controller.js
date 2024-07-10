// controllers/order.controller.js
const Order = require('../models/order.model');

const saveOrder = async (req, res) => {
  const { name, whatsapp, items } = req.body;

  try {
    const newOrder = new Order({
      name,
      whatsapp,
      items
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { saveOrder };
