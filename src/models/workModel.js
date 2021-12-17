import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WorkSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date,
    required: true
  },
  descr: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
    collection: 'work'
  });
