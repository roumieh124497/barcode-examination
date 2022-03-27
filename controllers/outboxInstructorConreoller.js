const Compose = require('./../models/composeModel');
const storage = require('node-sessionstorage');
exports.getoutboxPage = async (req, res) => {
  const userFind = storage.getItem('userFind');
  const compose = await Compose.find({});
  const composeFiltered = compose.filter(st => st.from === userFind.email);
  console.log(composeFiltered.length);
  res.render('outboxInstructor', { composeFiltered: composeFiltered });
};
