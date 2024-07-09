const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: { type: String, required: true },
  whatsapp: { type: String, required: true },
  cartItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Add this line
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
