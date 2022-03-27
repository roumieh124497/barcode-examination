const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const resultSchema = require('./resultSchema');
const studentSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,

      min: 8,
      max: 16,
    },
    studentID: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    results: [resultSchema],
  },
  { timestamps: true },
);

module.exports = studentSchema;
