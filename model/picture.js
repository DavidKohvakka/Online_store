const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    imageText: {
        type: String,
        required: true,
    },
    created_at: Date,
    updatet_at: Date,

}); 

const picture = mongoose.model('picture', pictureSchema);

module.exports = picture;