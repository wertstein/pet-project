const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const config = require('./config/config');

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(config.session));

if (!isProduction) {
  app.use(errorHandler());
}

mongoose.connect(config.connectionString);
mongoose.set('debug', true);

require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

app.use((err, req, res, next) => {
  const { name, message } = err;
  res.status(err.status || 500).json({ error: { name, message } });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
