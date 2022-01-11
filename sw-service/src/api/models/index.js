// Models for Data Layer
const UserSchema = require('./user.model');
const EmployeeSchema = require('./employee.model');

const connection = require('../../config/db.config');

connection.model('User', UserSchema);
connection.model('Employee', EmployeeSchema);

module.exports = connection.models;
