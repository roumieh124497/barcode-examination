const express = require('express');
const outboxController = require('./../controllers/outboxController');
const authFunction = require('../controllers/authFunction');
const route = express.Router();
const middleware = require('./../middleware/userAdminAuth');

route
  .route('/outbox')
  .get(
    authFunction.redirectLoginHome,
    middleware.isStudent,
    outboxController.getoutboxPage,
  );

module.exports = route;
