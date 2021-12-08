import mongoose from 'mongoose'
import { StudiesSchema } from '../models/studiesModel.js'

const Studies = mongoose.model('Studies', StudiesSchema)

export const addNewStudies = (req, res) => {
  let newStudies = new Studies(req.body)

  newStudies.save((err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

export const getStudies = (req, res) => {
  Studies.find({}, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

export const getStudiesByID = (req, res) => {
  Studies.findById(req.params.studiesID, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

export const updateStudies = (req, res) => {
  Studies.findOneAndUpdate({ _id: req.params.studiesID }, req.body, { new: true, useFindAndModify: false }, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

export const deleteStudies = (req, res) => {
  Studies.remove({ _id: req.params.studiesID }, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted job' })
  })
}