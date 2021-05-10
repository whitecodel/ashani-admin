const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        max: 50,
        required: true
    }, 
    password: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: String,
        default: Date.now
    },
});

module.exports = mongoose.model('Adminauth', schema);
