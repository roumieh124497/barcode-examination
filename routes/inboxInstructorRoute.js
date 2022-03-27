const express = require('express');
const inboxController = require('./../controllers/inboxInstructorController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');
route
  .route('/inbox-instructor')
  .get(
    authFunction.redirectLoginHome,
    middleware.isInstructor,
    inboxController.getInboxPage,
  )
  .post(
    authFunction.redirectLoginHome,
    middleware.isInstructor,
    inboxController.replyFunction,
  );

module.exports = route;
