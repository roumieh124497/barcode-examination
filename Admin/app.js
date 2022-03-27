const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Course = require('../models/courseModel');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose
  .connect(db)
  .then(() => {
    console.log('DB connected..');
  })
  .catch(err => {
    console.log(err);
  });

const addInstructor = async (req, res) => {
  let courseName = req.params.course_name;
  courseName = courseName.replace(/-/g, ' ');
  const getInstructor = req.body;
  console.log(courseName);
  const course = await Course.findOne({ course_name: courseName });
  console.log(course);
  course.instructor.push(getInstructor);
  course.markModified('instructor');
  course.save();
  res.status(200).json({
    data: {
      course,
    },
  });
};

const addCourses = (req, res) => {
  const getCourse = req.body;
  const course = new Course(getCourse);
  course.save();
  res.status(200).json({
    data: {
      course,
    },
  });
};
const addStudent = async (req, res) => {
  let courseName = req.params.course_name;
  courseName = courseName.replace(/-/g, ' ');
  const getStudent = req.body;
  const course = await Course.findOne({ course_name: courseName });
  course.students.push(getStudent);
  course.markModified('students');
  course.save();
  res.status(200).json({
    data: {
      course,
    },
  });
};

app.post('/admin/add-instructor/:course_name', addInstructor);
app.post('/admin/add-student/:course_name', addStudent);

app.post('/admin/add-courses', addCourses);
app.listen(7331, () => {
  console.log('server on port 7331');
});
