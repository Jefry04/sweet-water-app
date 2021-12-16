const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../api/models');

const { validPassword } = require('../lib/passwordUtils');

const verifyCallback = (username, password, cb) => {
  User.findOne({ username })
    .then((user) => {
      if (!user) return cb(null, false);

      const isValid = validPassword(password, user.password, user.salt);

      if (isValid) {
        return cb(null, user);
      }

      return cb(null, false);
    })
    .catch((err) => {
      cb(err);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use('local', strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
