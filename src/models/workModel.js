const mongoose = require('mongoose');
const Joi = require('joi');

// VALIDATION SCHEMA
const WorkValSchema = Joi.object({
  _id: Joi.string(),
  company: Joi.string()
    .min(4)
    .max(64)
    .required(),
  title: Joi.string()
    .min(4)
    .max(64)
    .required(),
  date_start: Joi.date()
    .required(),
  date_end: Joi.date(),
  descr: Joi.string()
    .min(8)
    .max(128)
    .required()
})



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
    required: false
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

module.exports = { WorkDBSchema, WorkValSchema };