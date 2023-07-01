// Install npm package
const express = require('express');
const app = express();
const path = require('path');

// Import router
const favoriteFoodRoute = require('./routes/favoriteFood');

// Connect to PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});

// Connect to DB

// Parse Incoming Request
app.use(express.json()); //Parse all incoming request that has information in request body

// Serve static files
// For any route request to '/static', serve the folder assets
app.use('/public', express.static(path.join(__dirname, '../src/assets')));
// Route response
app.use('/favoriteFood', favoriteFoodRoute);

// Handle unknown route
// For any request that is not handled from the route response portion, send 404.html
app.use('*', (req, res, next) => {
  return res.status(404).sendFile(path.join(__dirname, '../src/404.html'));
});

// Global Error handler
app.use((err, req, res, next) => {
  // Log err to the terminal
  console.log(err);
  // Send a general mesage to front end
  return res.status(500).send({ error: err });
});
