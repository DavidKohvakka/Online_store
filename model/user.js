const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unigue: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: Date,
    updatet_at: Date
})

const user = mongoose.model('user', userSchema);

module.exports = user;

