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
    console.log('Order saved:', savedOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order', error });
  }
};

module.exports = { saveOrder };
