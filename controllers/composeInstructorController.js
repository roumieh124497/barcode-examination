const storage = require('node-sessionstorage');
const Compose = require('./../models/composeModel');

exports.getComposePage = (req, res) => {
  res.render('compose');
};

exports.postMessage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const compose = new Compose({
    from: userFind.email,
    to: req.body.to,
    message: req.body.compose_message,
  });
  compose.save();

  res.redirect('/dashboared-Home');
};
