const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema(
  {
    subject_name: {
      type: String,
      required: true,
    },
    exam_type: {
      type: String,
      required: true,
    },
    exam_duration: Date,
    exam_persentage: {
      type: String,
      required: true,
    },
    questions: [
      {
        question: {
          type: String,
          required: true,
        },
        correct_answer: {
          type: String,
          required: true,
        },
        answers: Array,
      },
    ],
    isActive: {
      type: Boolean,
      default: 'false',
    },
  },
  { timestamps: true },
);
const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
