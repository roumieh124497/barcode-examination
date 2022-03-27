const express = require('express');
const { router } = require('../app');
const logoutFunction = require('../controllers/logout');
const userController = require('../controllers/userController');

const route = express.Router();

route
  .route('/login')
  .get(userController.loginController)
  .post(userController.loginControllerPost);
route.route('/logout').post(logoutFunction);
module.exports = route;
