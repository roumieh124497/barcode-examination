const express = require('express');
const addAnnouncementController = require('../controllers/addAnnouncementController');
const authFunction = require('../controllers/authFunction');
const middleware = require('./../middleware/userAdminAuth');
const route = express.Router();

route
  .route('/add-announcement')
  .get(
    authFunction.redirectLoginAddAnnouncement,
    middleware.isInstructor,
    addAnnouncementController.getaddAnnouncementPage,
  )
  .post(
    authFunction.redirectLoginAddAnnouncement,
    middleware.isInstructor,
    addAnnouncementController.addAnnouncementPost,
  );

module.exports = route;
