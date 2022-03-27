const Exam = require('../models/examModel');
const storage = require('node-sessionstorage');

exports.getAddExamPage = (req, res) => {
  res.render('addExam');
};
exports.addQuestionFunction = async (req, res) => {
  const userFind = storage.getItem('userFind');

  // const { question, answer1, answer2, answer3, answer4, correct_answer } =
  // req.body;

  res.redirect('/add-exam');
};
