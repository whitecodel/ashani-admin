const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user_id: {
        type: String,
        max: 255,
        required: true
    }, 
    otp: {
        type: String,
        max: 4,
        required: true
    },
    expired: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model('Otp', schema);