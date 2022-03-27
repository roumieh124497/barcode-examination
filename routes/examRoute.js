const express = require('express');
const examComtroller = require('../controllers/examController');
const authFunction = require('../controllers/authFunction');

const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/exam/:id')
  .get(
    authFunction.redirectLoginExamRoom,
    middleware.isStudent,
    examComtroller.getExamPage,
  );

module.exports = route;
