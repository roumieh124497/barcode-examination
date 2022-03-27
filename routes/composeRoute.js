const express = require('express');
const composeController = require('./../controllers/composeInstructorController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/compose-message')
  .get(
    authFunction.redirectLoginCourse,
    middleware.isStudent,
    composeController.getComposePage,
  )
  .post(
    authFunction.redirectLoginCourse,
    middleware.isStudent,
    composeController.postMessage,
  );

module.exports = route;
