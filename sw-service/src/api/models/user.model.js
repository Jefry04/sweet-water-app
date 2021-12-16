const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  salt: String,
  first_name: String,
  last_name: String,
});

module.exports = UserSchema;
