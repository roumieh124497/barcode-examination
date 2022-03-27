const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');

exports.getSettingPage = async (req, res) => {
  const userFind = storage.getItem('userFind');

  res.render('settingInstructor', { userFind: userFind, error: '' });
};

exports.changePassword = async (req, res) => {
  try {
    const userFind = storage.getItem('userFind');
    const oldPassword = req.body.old_password;
    const newPassword = req.body.new_password;
    const confirmPassword = req.body.confirm_password;
    console.log(newPassword, confirmPassword);

    if (!(userFind.password === oldPassword)) {
      return res.render('settingInstructor', {
        userFind: userFind,
        error: 'Wrong Password',
        color: 'red',
      });
    }
    if (newPassword === '') {
      return res.render('settingInstructor', {
        userFind: userFind,
        error: 'Enter New Password',
        color: 'red',
      });
    }
    if (confirmPassword === '') {
      return res.render('settingInstructor', {
        userFind: userFind,
        error: 'Enter Confirm Password',
        color: 'red',
      });
    }
    if (!(newPassword === confirmPassword)) {
      return res.render('settingInstructor', {
        userFind: userFind,
        error: 'Passwords Are Not Match',
        color: 'red',
      });
    }
    const courses = await Course.find({
      'instructor.full_name': userFind.full_name,
    });

    for (var i = 0; i < courses.length; i++) {
      Course.collection.findOneAndUpdate(
        {
          course_name: courses[i].course_name,
          'instructor.full_name': userFind.full_name,
        },
        {
          $set: {
            'instructor.$.password': newPassword,
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
    res.render('settingInstructor', {
      userFind: userFind,
      error: 'Your Password Updated',
      color: 'green',
    });
  } catch (err) {
    console.log(err);
  }
};
