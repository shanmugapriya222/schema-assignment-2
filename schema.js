const mongoose = require('mongoose');

//create comments schema
const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    commentedAt: {
        type: Date,
        default: Date.now,
    },
});

//define blogpost schema

const blogpostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },

    content: {
        type: String,
        required: true,
        minlength: 50
    },

    Author: {
        type: String,
        required: true
    },

    tags: {
        type: [String],
        default: []
    },

    category: {
        type: String,
        default: 'General'
    },

    likes: {
        type: [String],
        default: []
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },
    comments: [commentSchema],
});

//create a model for blogpost
const BlogPost = mongoose.model('BlogPost',blogpostSchema);

//export schema
module.exports = BlogPost;