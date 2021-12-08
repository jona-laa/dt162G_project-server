import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const StudiesSchema = new Schema({
  institution: {
    type: String,
    requred: 'Enter institution'
  },
  title: {
    type: String,
    required: 'Enter course name'
  },
  date_start: {
    type: Date,
    required: 'Enter start date'
  },
  date_end: {
    type: Date,
    required: 'Enter end date'
  },
  descr: {
    type: String,
    required: 'Enter course description'
  }
})
