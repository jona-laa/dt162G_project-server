const mongoose = require('mongoose');

// DB SCHEMA
const Schema = mongoose.Schema
const StudiesDBSchema = new Schema({
  institution: {
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
    required: true
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
    collection: 'studies'
  })

module.exports = { StudiesDBSchema };