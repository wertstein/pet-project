module.exports = {
  auth: {
    tokenExpiration: 1,
  },
  port: 8000,
  connectionString: 'mongodb://admin:Siewird4@ds161894.mlab.com:61894/pet',
  session: {
    secret: 'passport-tutorial',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  },
  apixu: { apikey: 'f6d5b7815afd46d29ba205704190302' },
};
