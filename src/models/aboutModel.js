import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const AboutSchema = new Schema({
  heading: {
    type: String,
    requred: 'Enter a heading'
  },
  bio: {
    type: String,
    required: 'Enter a bio section'
  },
  img_src: {
    type: String,
    required: 'Enter image source'
  }
})
