const fs = require('fs');
const path = require('path');

const foodController = {};

foodController.getFood = (req, res, next) => {
  // Obtain data from req, res.locals
  // Interaction w/ DB
  fs.readFile(
    path.join(__dirname, '../models/favoriteFood.json'),
    (err, data) => {
      // Handling err
      if (err) return next(err);
      // console.log(JSON.parse(data.toString()));
      res.locals.parsedData = JSON.parse(data.toString());
      // res.sendStatus(200);
      return next();
    }
  );
};

foodController.postFood = (req, res, next) => {
  const newFavoriteFood = req.body;
  // console.log('POST REQUEST BODY', req.body);
  // obtain the curent local infroamtion
  fs.readFile(
    path.join(__dirname, '../models/favoriteFood.json'),
    (err, data) => {
      // Handling err
      if (err) return next(err);

      // update the information
      const currentFavoriteFood = JSON.parse(data.toString());
      currentFavoriteFood.push(newFavoriteFood);

      // Overwrite the file
      fs.writeFile(
        path.join(__dirname, '../models/favoriteFood.json'),
        JSON.stringify(currentFavoriteFood),
        (err) => {
          if (err) return next(err);
          res.locals.currentFavoriteFood = currentFavoriteFood;
          return next();
        }
      );
    }
  );
};

module.exports = foodController;
