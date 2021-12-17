import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const SkillsSchema = new Schema({
  skill: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'skills'
  })
