const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: String,
  content: Object,
  allowedRoles: [String],
  frequency: Number,
});

module.exports = FormSchema;
