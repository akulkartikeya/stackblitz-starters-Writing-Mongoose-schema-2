// schema.js

const mongoose = require('mongoose');

// Define the Comment schema as a subdocument
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Blog Post schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  },
  author: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    default: 'General',
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  comments: [commentSchema], // Embed the comment schema as an array
}, { timestamps: true }); // Automatically manage updatedAt field

// Create the BlogPost model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
