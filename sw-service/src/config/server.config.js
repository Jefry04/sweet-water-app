const express = require('express');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const session = require('./session.config');
const swaggerDocument = require('../../docs/swagger.json');
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

// Swagger (docs) configuration
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;