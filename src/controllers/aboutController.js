import mongoose from 'mongoose'
import { AboutSchema } from '../models/aboutModel.js'

const About = mongoose.model('About', AboutSchema)

export const addNewAbout = (req, res) => {
  let newAbout = new About(req.body)

  newAbout.save((err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

export const getAbout = (req, res) => {
  About.find({}, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

export const getAboutByID = (req, res) => {
  About.findById(req.params.aboutID, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

export const updateAbout = (req, res) => {
  About.findOneAndUpdate({ _id: req.params.aboutID }, req.body, { new: true, useFindAndModify: false }, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

export const deleteAbout = (req, res) => {
  About.remove({ _id: req.params.aboutID }, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted about article' })
  })
}