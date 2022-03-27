const express = require('express');
const authFunction = require('../controllers/authFunction');
const addExamController = require('../controllers/addExamController');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');
route
  .route('/add-exam')
  .get(
    authFunction.redirectLoginCourse,
    middleware.isInstructor,
    addExamController.getAddExamPage,
  )
  .post(
    authFunction.redirectLoginCourse,
    middleware.isInstructor,
    addExamController.addQuestionFunction,
  );

module.exports = route;
