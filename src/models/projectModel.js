const mongoose = require('mongoose');

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
  ProjectDBSchema
};