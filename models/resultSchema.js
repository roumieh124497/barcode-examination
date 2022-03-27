const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    subjectName: String,
    grade: String,
  },
  { timestamps: true },
);

module.exports = resultSchema;
