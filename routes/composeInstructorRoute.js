const express = require('express');
const composeController = require('./../controllers/composeInstructorController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/compose-message-instructor')
  .get(
    authFunction.redirectLoginCourse,
    middleware.isInstructor,
    composeController.getComposePage,
  )
  .post(
    authFunction.redirectLoginCourse,
    middleware.isInstructor,
    composeController.postMessage,
  );

module.exports = route;
