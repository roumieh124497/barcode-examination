const express = require('express');
const outboxController = require('./../controllers/outboxInstructorConreoller');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');
route
  .route('/outbox-instructor')
  .get(
    authFunction.redirectLoginHome,
    middleware.isInstructor,
    outboxController.getoutboxPage,
  );

module.exports = route;
