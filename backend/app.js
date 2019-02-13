const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

const config = require('./config/config');

const initDB = require('./db');

const isProduction = process.env.NODE_ENV === 'production';

initDB();

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

require('./models/Forecast');
require('./models/Users');

require('./config/passport');
app.use(require('./routes'));

app.use((err, req, res) => {
  const { name, message } = err;
  res.status(err.status || 500).json({ error: { name, message } });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
