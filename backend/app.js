const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cors = require('cors'),
  errorHandler = require('errorhandler'),
  config = require('./config/config'),
  initDB = require('./db'),
  isProduction = process.env.NODE_ENV === 'production',
  app = express(),
  http = require('http'),
  socket = require('socket.io');

app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(config.session));

if (!isProduction) {
  app.use(errorHandler());
}

initDB();

require('./models/Forecast');
require('./models/Users');

require('./config/passport');

app.use(require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (!isProduction) {
  app.use(function(err, req, res, next) /* eslint-disable-line */ {
    console.log(err.stack); /* eslint-disable-line */

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
app.use(function(err, req, res, next) /* eslint-disable-line */ {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const server = http
  .createServer(app)
  .listen(process.env.PORT || config.port, function() {
    console.log('Express server listening on port ' + app.get('port'));
  });

const io = socket.listen(server);

io.on('connection', socket => {
  console.log('WS: a user connected');

  socket.on('disconnect', () => {
    console.log('WS: user disconnected');
  });

  socket.on('message', () => {
    console.log('WS: user sent message');
  });
});

// io.emit('message', { for: 'everyone' });

let i = 0;
setInterval(() => {
  io.emit('message', { for: 'everyone' }, i);
  i++;
}, 2000);
