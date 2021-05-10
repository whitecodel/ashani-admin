const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    mobile_number: {
        type: String,
        unique: true,
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

module.exports = mongoose.model('Auth', schema);
