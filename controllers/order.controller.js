const Order = require('../models/order.model');

const saveOrder = async (req, res) => {
  const { name, whatsapp, cartItems } = req.body;

  try {
    const sanitizedCartItems = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const newOrder = new Order({
      name,
      whatsapp,
      cartItems: sanitizedCartItems,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error saving order', error });
  }
};

module.exports = {
  saveOrder,
};
