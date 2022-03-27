const express = require('express');
const settingController = require('./../controllers/settingInstructorController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');
route
  .route('/setting-instructor')
  .get(
    authFunction.redirectLoginHome,
    middleware.isInstructor,
    settingController.getSettingPage,
  )
  .post(
    authFunction.redirectLoginHome,
    middleware.isInstructor,
    settingController.changePassword,
  );

module.exports = route;
