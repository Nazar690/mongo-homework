const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    firstName: {
        type: String,
        min: 5,
        max: 50,
        required: true
    },

    lastName: {
        type: String,
        min: 3,
        max: 60,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'writer', 'guest']
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    numberOfArticles: {
        type: String,
        default: 0
    },

    nickname: String
});

module.exports = mongoose.model('User', ProductSchema);