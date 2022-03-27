const User = require('../models/userModel');
const { redirectLoginCourse } = require('./authFunction');
const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
let userFind;
exports.loginController = async (req, res) => {
  res.status(200).render('login', { user: true });
};

exports.loginControllerPost = async (req, res) => {
  try {
    let student = [];
    let instructors = [];
    const course = await Course.find({});
    for (let i = 0; i < course.length; i++) {
      student.push(course[i].students);
      instructors.push(course[i].instructor);
    }

    student = student.flat(1);
    instructors = instructors.flat(1);

    let stu = student.filter(st => st.email === req.body.email);
    stu = stu[0];
    // console.log(stu);
    let inst = instructors.filter(ins => ins.email === req.body.email);
    inst = inst[0];
    // console.log(inst);

    let user;

    if (stu) {
      userFind = stu;
      user = stu;
    } else {
      userFind = inst;
      user = inst;
    }
    storage.setItem('userFind', userFind);

    if (!user)
      return res.render('login', { alert: 'user not found', user: false });
    if (user.password != req.body.password)
      return res.render('login', { alert: 'wrong password', user: false });
    const userId = user._id.toString();
    if (user) {
      req.session.userId = userId;

      if (stu) {
        return res.redirect('/home');
      } else {
        return res.redirect('/dashboared-Home');
      }
    }
  } catch (err) {
    console.log(err);
  }
};
