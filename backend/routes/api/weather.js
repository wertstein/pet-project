const router = require('express').Router();
const apixuClient = require('apixu');
const asyncHandler = require('express-async-handler');

const auth = require('../auth');
const config = require('../../config/config');

const apixu = new apixuClient.Apixu(config.apixu);

router
  .get(
    '/current',
    auth.optional,
    asyncHandler(async (req, res) => {
      const { location } = req.query;
      const data = await apixu.current(location);

      res.send(data);
    })
  )
  .get(
    '/forecast',
    auth.optional,
    asyncHandler(async (req, res) => {
      const { location } = req.query;
      const data = await apixu.forecast(location);

      res.send(data);
    })
  );

module.exports = router;
