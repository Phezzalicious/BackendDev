const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlPizzas = require('../controllers/pizzas');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/pizza',ctrlPizzas.homelist);
router.get('pizza/info', ctrlPizzas.pizzaInfo);

router.get('/about', ctrlOthers.about);

module.exports = router;
