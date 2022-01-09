const mongoose = require('mongoose');
const logger = require('../logger');
const { AboutDBSchema } = require('../models/aboutModel.js');

const About = mongoose.model('About', AboutDBSchema)

const addNewAbout = (req, res) => {
  // Create & Save
  let newAbout = new About(req.body)
  newAbout.save((err, about) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(about)
  })
}

const getAbout = (req, res) => {
  About.find({}, (err, about) => {
    if (err) {
      res.json({ error: err })
    }
    res.json(about)
  })
}

const getAboutByID = (req, res) => {
  About.findById(req.params.aboutID, (err, about) => {
    if (err) {
      res.json({ error: err })
    }
    res.json(about)
  })
}

const updateAbout = (req, res) => {
  // Find & Update
  About.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, about) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(about)
  })
}

const deleteAbout = (req, res) => {
  // NEEDS AUTHORIZATION
  About.deleteOne({ _id: req.body._id }, (err, about) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json({ message: 'Successfully deleted about article' })
  })
}

module.exports = {
  addNewAbout,
  getAbout,
  getAboutByID,
  updateAbout,
  deleteAbout
}