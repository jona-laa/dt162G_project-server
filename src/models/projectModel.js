const mongoose = require('mongoose');
const Joi = require('joi');

// VALIDATION SCHEMA
const ProjectValSchema = Joi.object({
  _id: Joi.string(),
  title: Joi.string()
    .min(2)
    .max(32)
    .required(),
  prj_url: Joi.string()
    .min(8)
    .max(512)
    .required(),
  img_src: Joi.string()
    .min(4)
    .max(128)
    .required(),
  descr: Joi.string()
    .min(8)
    .max(256)
    .required(),
})



// DB SCHEMA
const Schema = mongoose.Schema
const ProjectDBSchema = new Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 32,
    required: true
  },
  prj_url: {
    type: String,
    minlength: 8,
    maxlength: 512,
    required: true
  },
  img_src: {
    type: String,
    minlength: 4,
    maxlength: 128,
    required: true
  },
  descr: {
    type: String,
    minlength: 8,
    maxlength: 256,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'projects'
  })

module.exports = {
  ProjectDBSchema,
  ProjectValSchema
};