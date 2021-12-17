import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const AboutSchema = new Schema({
  heading: {
    type: String,
    requred: true,
  },
  bio: [{
    type: String,
    required: true
  }],
  img_src: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'about'
  })
