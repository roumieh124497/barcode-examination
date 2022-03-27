const storage = require('node-sessionstorage');

exports.isStudent = (req, res, next) => {
  const userFind = storage.getItem('userFind');
  if (userFind.studentID) {
    return next();
  }
  res.redirect('/login');
};

exports.isInstructor = (req, res, next) => {
  const userFind = storage.getItem('userFind');

  if (!userFind.studentID) {
    return next();
  }

  res.redirect('/login');
};
