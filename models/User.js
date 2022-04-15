const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobile_number: {
            type: String,
            unique: true,
            max: 255,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            max: 255,
            required: true,
        },
        password: {
            type: String,
            max: 255,
            required: true,
        },
        mpin: {
            type: String,
            max: 255,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", schema);
