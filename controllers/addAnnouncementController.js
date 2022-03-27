const storage = require('node-sessionstorage');
const Course = require('./../models/courseModel');

exports.getaddAnnouncementPage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  let announcement = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].instructor.some(st => st.email === userFind.email)) {
      announcement.push(courses[i].announcement_messages);
    }
  }
  announcement = announcement.flat(1);

  res.render('addAnnouncement', { announcement: announcement });
};

exports.addAnnouncementPost = async (req, res) => {
  console.log(req.body.announcement);
  const userFind = storage.getItem('userFind');
  const courses = await Course.find({});
  const announcement = {
    message: req.body.announcement,
    instructor_name: userFind.full_name,
  };
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].instructor.some(st => st.email === userFind.email)) {
      courses[i].announcement_messages.push(announcement);
      courses[i].markModified('announcement_messages');
      courses[i].save();
    }
  }
  res.redirect('/add-announcement');
};
