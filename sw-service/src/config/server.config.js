const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('./session.config');
require('./passport.config');

const app = express();

// parse body params and attach them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session configuration
app.use(session());

// passport configuration
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

module.exports = app;
