const Order = require('../models/order.model');

const saveOrder = async (req, res) => {
  const { name, whatsapp, cartItems } = req.body;
  console.log('Request received:', { name, whatsapp, cartItems });

  try {
    const sanitizedCartItems = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    console.log('Sanitized cart items:', sanitizedCartItems);

    const newOrder = new Order({
      name,
      whatsapp,
      cartItems: sanitizedCartItems,
    });

    console.log('Saving new order:', newOrder);

    const savedOrder = await newOrder.save();

    console.log('Order saved successfully:', savedOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order', error });
  }
};

module.exports = {
  saveOrder,
};
