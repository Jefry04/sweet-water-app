// Models for Data Layer
const UserSchema = require('./user.model');

const connection = require('../../config/db.config');

connection.model('User', UserSchema);

module.exports = connection.models;
