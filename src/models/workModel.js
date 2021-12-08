import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WorkSchema = new Schema({
  company: {
    type: String,
    requred: 'Enter company name'
  },
  title: {
    type: String,
    required: 'Enter work title'
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
    required: 'Enter work description'
  }
})
