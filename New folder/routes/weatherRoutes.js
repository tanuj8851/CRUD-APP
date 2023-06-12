const express = require('express');
const validateCityMiddleware = require('../middlewares/validateCityMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/current', authMiddleware, validateCityMiddleware, weatherController.getCurrentWeather);

module.exports = router;
