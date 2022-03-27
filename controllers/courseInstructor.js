const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
exports.getCourseInstructorPage = async (req, res) => {
  let numOfStudent = 0;
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  let courseFinal = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].instructor.some(st => st.email === userFind.email)) {
      numOfStudent = numOfStudent + courses[i].students.length;
      courseFinal.push(courses[i]);
    }
  }

  res.render('courseInstructor', {
    userFind: userFind,
    courseFinal: courseFinal,
    numOfStudent: numOfStudent,
  });
};
