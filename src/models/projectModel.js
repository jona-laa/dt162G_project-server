import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  project_url: {
    type: String,
    required: true
  },
  img_src: {
    type: String,
    required: true
  },
  descr: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'projects'
  })
