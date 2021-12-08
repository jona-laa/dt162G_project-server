import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const SkillsSchema = new Schema({
  skill: {
    type: String,
    requred: 'Enter skill name'
  },
  icon: {
    type: String,
    required: 'Enter Font-Awesome icon code'
  }
})
