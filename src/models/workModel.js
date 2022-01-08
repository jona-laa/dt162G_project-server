const mongoose = require('mongoose');

// DB SCHEMA
const Schema = mongoose.Schema
const WorkDBSchema = new Schema({
  company: {
    type: String,
    minlength: 4,
    maxlength: 64,
    required: true
  },
  title: {
    type: String,
    minlength: 4,
    maxlength: 64,
    required: true
  },
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date,
  },
  descr: {
    type: String,
    minlength: 8,
    maxlength: 128,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'work'
  });

module.exports = { WorkDBSchema };