//course-section

const express = require('express');
const courseInstructorController = require('../controllers/courseInstructor');
const authFunction = require('../controllers/authFunction');

const route = express.Router();

route
  .route('/course-section')
  .get(
    authFunction.redirectLoginCourseInstructor,
    courseInstructorController.getCourseInstructorPage,
  );

module.exports = route;
