import express from 'express';
import Weather from '../Controllers/Weather';

const router = express.Router();


router.route('/')
  /* GET /v1.0/weather/ - Get cities */
  .get(Weather.getCities);

router.route('/:cityId')
  /* GET /v1.0/weather/:cityId - Get cities weather */
  .get(Weather.getCitiesWeather);

module.exports = router;
