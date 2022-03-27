const express = require('express');
const inboxController = require('./../controllers/inboxController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');

route
  .route('/inbox')
  .get(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    inboxController.getInboxPage,
  )
  .post(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    inboxController.replyFunction,
  );

module.exports = route;
