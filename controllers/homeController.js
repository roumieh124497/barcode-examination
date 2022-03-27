const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');
exports.getHomePage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  let courseFinal = [];
  let announcement = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].students.some(st => st.email === userFind.email)) {
      announcement.push(courses[i].announcement_messages);
      courseFinal.push(courses[i]);
    }
  }
  announcement = announcement.flat(1);

  res.render('home', {
    courseFinal: courseFinal,
    userFind: userFind,
    announcement: announcement,
  });
};
