const express = require('express');
const homeInstructorController = require('../controllers/homeInstructorController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/dashboared-Home')
  .get(
    authFunction.redirectLoginHomeInstructor,
    middleware.isInstructor,
    homeInstructorController.homeInstructorController,
  );

module.exports = route;
