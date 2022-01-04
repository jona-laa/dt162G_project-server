const mongoose = require('mongoose');
const { SkillsDBSchema } = require('../models/skillsModel.js');

const Skills = mongoose.model('Skills', SkillsDBSchema)

const addNewSkill = (req, res) => {
  // Create & Save
  let newSkill = new Skills(req.body)

  newSkill.save((err, skill) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(skill)
  })
}

const getSkills = (req, res) => {
  Skills.find({}, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

const getSkillByID = (req, res) => {
  Skills.findById(req.params.skillID, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

const updateSkill = (req, res) => {
  // Find & Update
  Skills.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, skill) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(skill)
  })
}

const deleteSkill = (req, res) => {
  Skills.deleteOne({ _id: req.body._id }, (err, skill) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json({ message: 'Successfully deleted skill ' })
  })
}

module.exports = {
  addNewSkill,
  getSkills,
  getSkillByID,
  updateSkill,
  deleteSkill
}