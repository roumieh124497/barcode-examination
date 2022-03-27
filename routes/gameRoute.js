const express = require('express');
const gameController = require('./../controllers/gameController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/game')
  .get(
    authFunction.redirectLoginHomeInstructor,
    middleware.isStudent,
    gameController.getGame,
  );

module.exports = route;
