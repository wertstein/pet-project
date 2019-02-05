const express = require('express');
const router = express.Router();

router.use('/users', require('./users')).use('/weather', require('./weather'));

module.exports = router;
