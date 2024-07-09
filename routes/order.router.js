const express = require('express');
const { saveOrder } = require('../controllers/order.controller');
const router = express.Router();

// Route to save order with restaurantId
router.post('/restaurants/:restaurantId/orders', saveOrder);

module.exports = router;
