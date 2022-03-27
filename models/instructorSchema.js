const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema(
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
  },
  { timestamps: true },
);

module.exports = instructorSchema;
