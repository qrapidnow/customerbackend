const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const orderRoute = require('./routes/order.router');

const app = express();
const port = process.env.PORT || 5000;

// Setup CORS explicitly
app.use(cors({
  origin: ['https://frontend1-sand.vercel.app'], // Array format for clarity
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // If your front end needs to handle cookies
  preflightContinue: false,
  optionsSuccessStatus: 204 // Some browsers need specific status
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(orderRoute); // Ensure correct base path

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Server error occurred');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
