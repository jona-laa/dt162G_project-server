import mongoose from 'mongoose'
import { WorkSchema } from '../models/workModel.js'

const Work = mongoose.model('Work', WorkSchema)

export const addNewWork = (req, res) => {
  let newWork = new Work(req.body)

  newWork.save((err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

export const getWork = (req, res) => {
  Work.find({}, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

export const getWorkByID = (req, res) => {
  Work.findById(req.params.workID, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

export const updateWork = (req, res) => {
  Work.findOneAndUpdate({ _id: req.params.workID }, req.body, { new: true, useFindAndModify: false }, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

export const deleteWork = (req, res) => {
  Work.remove({ _id: req.params.workID }, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted job' })
  })
}