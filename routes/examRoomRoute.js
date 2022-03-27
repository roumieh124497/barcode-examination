const express = require('express');
const examRoomComtroller = require('../controllers/examRoomController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/examroom')
  .get(
    authFunction.redirectLoginExamRoom,
    middleware.isStudent,
    examRoomComtroller.getexamRoomPage,
  );

module.exports = route;
