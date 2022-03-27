const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

const logoutFunction = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/home');
    }
    res.clearCookie(process.env.SESSION_NAME);
    res.redirect('/login');
  });
};

module.exports = logoutFunction;
