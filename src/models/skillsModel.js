const mongoose = require('mongoose');

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

module.exports = { SkillsDBSchema };