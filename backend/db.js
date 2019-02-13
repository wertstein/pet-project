const mongoose = require('mongoose');
const config = require('./config/config');

const initDB = () => {
  mongoose.promise = global.Promise;

  mongoose.connect(config.connectionString);
  mongoose.set('debug', true);

  const db = mongoose.connection;
  console.log('MongoDB: Connecting...');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('MongoDB: Connected');
  });
};

module.exports = initDB;
