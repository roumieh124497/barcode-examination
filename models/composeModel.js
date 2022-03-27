const mongoose = require('mongoose');

const composeSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: [true, 'enter the email you want to send the email to'],
  },
  message: {
    type: String,
    required: true,
  },
});

const Compose = mongoose.model('compose', composeSchema);

module.exports = Compose;
