const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'please enter your email'],
        validate: [validator.isEmail, 'please provide valid email'],
    },
    role: {
        type: String,
        enum: ['user', 'instractor', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;