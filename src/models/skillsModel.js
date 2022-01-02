const mongoose = require('mongoose');
const Joi = require('joi');

// VALIDATION SCHEMA
const SkillsValSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string()
    .min(2)
    .max(32)
    .required(),
  icon: Joi.string()
    .min(8)
    .max(32)
    .required()
})



// DB SCHEMA
const Schema = mongoose.Schema
const SkillsDBSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 32,
    required: true
  },
  icon: {
    type: String,
    minlength: 8,
    maxlength: 32,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'skills'
  })

module.exports = { SkillsDBSchema, SkillsValSchema };