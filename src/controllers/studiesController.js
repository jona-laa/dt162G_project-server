const mongoose = require('mongoose');
const { StudiesDBSchema } = require('../models/studiesModel.js');

const Studies = mongoose.model('Studies', StudiesDBSchema)

const addNewStudies = (req, res) => {
  // Create & Save
  let newStudies = new Studies(req.body)

  newStudies.save((err, studies) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(studies)
  })
}

const getStudies = (req, res) => {
  Studies.find({}, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

const getStudiesByID = (req, res) => {
  Studies.findById(req.params.studiesID, (err, studies) => {
    if (err) {
      res.send(err)
    }
    res.json(studies)
  })
}

const updateStudies = (req, res) => {
  // Find & Update
  Studies.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, studies) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(studies)
  })
}

const deleteStudies = (req, res) => {
  // NEEDS AUTHORIZATION
  Studies.deleteOne({ _id: req.body._id }, (err, studies) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json({ message: 'Successfully deleted course' })
  })
}

module.exports = {
  addNewStudies,
  getStudies,
  getStudiesByID,
  updateStudies,
  deleteStudies
}