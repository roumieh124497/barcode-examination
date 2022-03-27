const Compose = require('./../models/composeModel');
const storage = require('node-sessionstorage');
exports.getInboxPage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const compose = await Compose.find({});
  const composeFiltered = compose.filter(st => st.to === userFind.email);
  console.log(composeFiltered.length);
  res.render('inboxInstructor', { composeFiltered: composeFiltered });
};

exports.replyFunction = (req, res) => {
  const userFind = storage.getItem('userFind');
  const compose = new Compose({
    from: userFind.email,
    to: req.body.to,
    message: req.body.textArea,
  });
  compose.save();
  res.redirect('/inbox-instructor');
};
