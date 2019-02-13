const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConditionSchema = new Schema({
  code: Number,
  icon: String,
  text: String,
});

const ForecastdaySchema = new Schema({
  date: Date,
  day: {
    avgtemp_c: Number,
    condition: ConditionSchema,
    maxtemp_c: Number,
    mintemp_c: Number,
  },
});

const ForecastSchema = new Schema({
  current: {
    condition: ConditionSchema,
    feelslike_c: Number,
    last_updated: Date,
    temp_c: Number,
  },
  query: String,
  forecast: {
    forecastday: [ForecastdaySchema],
  },
  location: {
    name: String,
  },
});

mongoose.model('Forecast', ForecastSchema);
