const express = require('express');
const settingController = require('./../controllers/settingController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');

route
  .route('/setting')
  .get(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    settingController.getSettingPage,
  )
  .post(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    settingController.changePassword,
  );
// .post(authFunction.redirectLoginHome, settingController.changeImage);

module.exports = route;
