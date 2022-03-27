const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const userRoute = require('./routes/userRoute');
const coursesRoute = require('./routes/coursesRoute');
const examroomRoute = require('./routes/examRoomRoute');
const homeRoute = require('./routes/homeRoute');
const homeInstructorRoute = require('./routes/homeInstructor');
const courseInstructorRoute = require('./routes/courseInstructor');
const addAnnouncementRoute = require('./routes/addAnnouncementRoute');
const composeRoute = require('./routes/composeRoute');
const inboxRoute = require('./routes/inboxRoute');
const composeInstructorRoute = require('./routes/composeInstructorRoute');
const inboxInstructorRoute = require('./routes/inboxInstructorRoute');
const outboxRoute = require('./routes/outboxRoute');
const outboxInstructorRoute = require('./routes/outboxInstructorRoute');
const settingRoute = require('./routes/settingRoute');
const settingInstructorRoute = require('./routes/settingInstructorRoute');
const gameRoute = require('./routes/gameRoute');
const examRoute = require('./routes/examRoute');
const addExamRoute = require('./routes/addExamRoute');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
app.use(
  session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: +process.env.COOKIES_MAX_AGE,
      httpOnly: true,
      sameSite: true,
      secure: false,
    },
  }),
);
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/',
  homeInstructorRoute,
  courseInstructorRoute,
  addAnnouncementRoute,
  composeInstructorRoute,
  inboxInstructorRoute,
  outboxInstructorRoute,
  settingInstructorRoute,
  addExamRoute,
);
app.use(
  '/',
  coursesRoute,
  examroomRoute,
  homeRoute,
  userRoute,
  composeRoute,
  inboxRoute,
  outboxRoute,
  settingRoute,
  gameRoute,
  examRoute,
);

app.get('*', (req, res) => {
  res.redirect('/home');
});

module.exports = app;
