const express = require('express');
const coursesController = require('../controllers/courersController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/courses')
  .get(
    authFunction.redirectLoginCourse,
    middleware.isStudent,
    coursesController.getCoursePage,
  );

module.exports = route;
