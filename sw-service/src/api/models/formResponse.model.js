const mongoose = require('mongoose');

const FormResponseSchema = new mongoose.Schema(
  {
    formId: mongoose.Schema.Types.ObjectId,
    response: Object,
    formContent: Object,
    savedBy: String,
  },
  {
    timestamps: true,
  }
);

module.exports = FormResponseSchema;
