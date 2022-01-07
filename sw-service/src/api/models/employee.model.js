const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  fullName: String,
  nationalId: Number,
  workRole: String,
});

module.exports = EmployeeSchema;
