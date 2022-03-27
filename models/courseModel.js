const mongoose = require('mongoose');
const studentSchema = require('./studentSchema');
const instructorSchema = require('./instructorSchema');
const courseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_code: {
      type: String,
      required: true,
    },
    instructor: [instructorSchema],
    students: [studentSchema],

    announcement_messages: [
      {
        message: String,
        instructor_name: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Course', courseSchema);
