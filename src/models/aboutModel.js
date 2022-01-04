const mongoose = require('mongoose');
const Joi = require('joi');

// DB SCHEMA
const Schema = mongoose.Schema
const AboutDBSchema = new Schema({
  heading: {
    type: String,
    minlength: 8,
    maxlength: 256,
    requred: true,
  },
  bio: {
    type: String,
    minlength: 64,
    maxlength: 1024,
    required: true,
  },
  img_src: {
    type: String,
    minlength: 1,
    maxlength: 256,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'about'
  })

module.exports = {
  AboutDBSchema,
};