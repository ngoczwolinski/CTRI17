const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const foodController = require('../controllers/foodController');

router.get('/', foodController.getFood, (req, res) => {
  // Obtain data from req, res.locals
  // Interaction w/ DB
  return res.status(200).json(res.locals.parsedData);
});

router.post('/', foodController.postFood, (req, res) => {
  return res.status(200).json(res.locals.currentFavoriteFood);
});

router.delete('/', (req, res, next) => {
  console.log('DELETE');
  const { name } = req.body;
  // obtain the curent local inforamtion
  fs.readFile(
    path.join(__dirname, '../models/favoriteFood.json'),
    (err, data) => {
      // Handling err
      if (err) return next(err);

      // update the information
      const currentFavoriteFood = JSON.parse(data.toString());
      // Remove the element that has name is matching with input name
      const updateFavoriteFood = currentFavoriteFood.filter(
        (entry) => entry.name != name
      );

      // Overwrite the file
      fs.writeFile(
        path.join(__dirname, '../models/favoriteFood.json'),
        JSON.stringify(updateFavoriteFood),
        (err) => {
          if (err) return next(err);
          return res.status(200).json(updateFavoriteFood);
        }
      );
    }
  );
});

module.exports = router;
