const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  salt: String,
  firstName: String,
  lastName: String,
  roles: [String],
});

module.exports = UserSchema;
