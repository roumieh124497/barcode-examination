const express = require('express');
const homeController = require('../controllers/homeController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');

route
  .route('/home')
  .get(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    homeController.getHomePage,
  );

module.exports = route;
