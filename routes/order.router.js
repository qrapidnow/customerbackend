const express = require('express');
const router = express.Router();
const { saveOrder } = require('../controllers/orderController');

// Route to save order
router.post('/orders', saveOrder);

module.exports = router;
