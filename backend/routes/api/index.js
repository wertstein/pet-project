const express = require('express');
const router = express.Router();

router.use('/users', require('./users')).use('/weather', require('./forecast'));

module.exports = router;
