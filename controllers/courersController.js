const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
exports.getCoursePage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  let courseFinal = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].students.some(st => st.email === userFind.email)) {
      courseFinal.push({
        course: courses[i],
        announcement: courses[i].announcement_messages,
      });
    }
  }
  console.log(courseFinal);
  res.render('courses', { courseFinal: courseFinal, userFind: userFind });
};
