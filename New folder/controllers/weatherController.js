const axios = require('axios');
const Weather = require('../models/Weather');

const getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.query;

    // Check if weather data is already cached in Redis
    const cachedWeatherData = await redisClient.get(city);
    if (cachedWeatherData) {
      return res.json(JSON.parse(cachedWeatherData));
    }

    // Make API call to retrieve weather data
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`);
    const weatherData = response.data;

    // Cache weather data in Redis
    redisClient.set(city, JSON.stringify(weatherData));

    // Save weather data in MongoDB
    const weather = new Weather({ city, data: JSON.stringify(weatherData) });
    await weather.save();

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};

module.exports = { getCurrentWeather };
