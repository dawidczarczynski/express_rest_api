const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname: { 
        type: String,
        required: [true, 'First name has to be present.'],
        index: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    email: {
        type: String,
        unique: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, versionKey: false });

const User = model('user', userSchema);

module.exports = {
    User,
};
