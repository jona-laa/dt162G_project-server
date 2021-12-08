import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ProjectSchema = new Schema({
  title: {
    type: String,
    required: 'Enter project name'
  },
  project_url: {
    type: String,
    required: 'Enter project url'
  },
  img_src: {
    type: String,
    required: 'Enter image source'
  },
  descr: {
    type: String,
    required: 'Enter course description'
  }
})
