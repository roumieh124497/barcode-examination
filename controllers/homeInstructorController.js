const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
exports.homeInstructorController = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  let courseFinal = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].instructor.some(st => st.email === userFind.email)) {
      courseFinal.push(courses[i]);
    }
  }

  res.render('homeInstructor', {
    userFind: userFind,
    courseFinal: courseFinal,
  });
};
