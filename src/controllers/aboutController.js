const mongoose = require('mongoose');
const { AboutDBSchema, AboutValSchema } = require('../models/aboutModel.js');

const About = mongoose.model('About', AboutDBSchema)

const addNewAbout = (req, res) => {
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = AboutValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create & Save
  let newAbout = new About(req.body)
  newAbout.save((err, about) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(about)
  })
}

const getAbout = (req, res) => {
  About.find({}, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

const getAboutByID = (req, res) => {
  About.findById(req.params.aboutID, (err, about) => {
    if (err) {
      res.send(err)
    }
    res.json(about)
  })
}

const updateAbout = (req, res) => {
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = AboutValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Find & Update
  About.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, about) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(about)
  })
}

const deleteAbout = (req, res) => {
  // NEEDS AUTHORIZATION
  About.deleteOne({ _id: req.body._id }, (err, about) => {
    if (err) {
      res.status(400).send(err)
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