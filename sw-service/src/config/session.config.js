const MongoStore = require('connect-mongo');
const session = require('express-session');

const connection = require('./db.config');

// TODO: Catch connection errors to DB
const store = new MongoStore({
  client: connection.getClient(),
});

const options = {
  secret: 'change-me-to-env-variable',
  resave: true,
  saveUninitialized: true,
  store,
  name: 'sw-session',
  cookie: {
    maxAge: 168 * 60 * 60 * 1000, // 7 Days
  },
};

module.exports = () => session(options);
