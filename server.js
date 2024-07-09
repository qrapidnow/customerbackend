const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const orderRoute = require('./routes/orders');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', orderRoute);  // Ensure the route is prefixed with /api

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // Export the app for Vercel's serverless function handling
