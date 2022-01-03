const mongoose = require('mongoose');

const dbString = 'mongodb://sw-database-admin:admin-aguadulce@localhost:27017/sw-database';

const connection = mongoose.createConnection(dbString);

connection.on('error', () => {
  console.error('Error connecting to database');
});

module.exports = connection;
