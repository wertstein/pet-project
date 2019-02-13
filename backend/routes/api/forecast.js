const router = require('express').Router();
const apixuClient = require('apixu');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
// const auth = require('../auth');
const config = require('../../config/config');

const Forecast = mongoose.model('Forecast');

const apixu = new apixuClient.Apixu(config.apixu);

router.get(
  '/forecast',
  // auth.required,
  asyncHandler(async (req, res) => {
    const { query } = req.query;

    let forecast = await Forecast.findOne({ query });

    if (!forecast) {
      const data = await apixu.forecast(query, 5);
      const { condition, feelslike_c, last_updated, temp_c } = data.current;
      const { name } = data.location;

      const forecastday = data.forecast.forecastday.map(f => {
        const { date } = f;
        const { mintemp_c, maxtemp_c, avgtemp_c, condition } = f.day;

        return {
          date,
          day: {
            avgtemp_c,
            condition,
            maxtemp_c,
            mintemp_c,
          },
        };
      });

      forecast = new Forecast({
        current: {
          condition,
          feelslike_c,
          last_updated,
          temp_c,
        },
        forecast: {
          forecastday,
        },
        location: {
          name,
        },
        query,
      });

      await forecast.save();
    }

    res.send(forecast);
  }),
);

module.exports = router;
