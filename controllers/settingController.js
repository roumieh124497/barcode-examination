const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
const multer = require('multer');
const path = require('path');
//set storage engine

// const storage = multer.diskStorage({
//   destination: '../public/img/studentImg/',
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname),
//     );
//   },
// });

// //Init Upload
// const upload = multer({
//   storage: storage,
// }).single('myImage');
exports.getSettingPage = async (req, res) => {
  const userFind = storage.getItem('userFind');

  res.render('setting', { userFind: userFind, error: '' });
};

exports.changePassword = async (req, res) => {
  try {
    const userFind = storage.getItem('userFind');
    const oldPassword = req.body.old_password;
    const newPassword = req.body.new_password;
    const confirmPassword = req.body.confirm_password;
    console.log(newPassword, confirmPassword);

    if (!(userFind.password === oldPassword)) {
      return res.render('setting', {
        userFind: userFind,
        error: 'Wrong Password',
        color: 'red',
      });
    }
    if (newPassword === '') {
      return res.render('setting', {
        userFind: userFind,
        error: 'Enter New Password',
        color: 'red',
      });
    }
    if (confirmPassword === '') {
      return res.render('setting', {
        userFind: userFind,
        error: 'Enter Confirm Password',
        color: 'red',
      });
    }
    if (!(newPassword === confirmPassword)) {
      return res.render('setting', {
        userFind: userFind,
        error: 'Passwords Are Not Match',
        color: 'red',
      });
    }
    const courses = await Course.find({
      'students.full_name': userFind.full_name,
    });

    for (var i = 0; i < courses.length; i++) {
      Course.collection.findOneAndUpdate(
        {
          course_name: courses[i].course_name,
          'students.full_name': userFind.full_name,
        },
        {
          $set: {
            'students.$.password': newPassword,
          },
        },
        { upsert: true },

        (err, doc) => {
          if (err) {
            console.log(err);
          } else {
            console.log('Updated Docs : ', doc);
          }
        },
      );
    }
    res.render('setting', {
      userFind: userFind,
      error: 'Your Password Updated',
      color: 'green',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.changeImage = (req, res) => {};
