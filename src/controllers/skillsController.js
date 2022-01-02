const mongoose = require('mongoose');
const { SkillsDBSchema, SkillsValSchema } = require('../models/skillsModel.js');

const Skills = mongoose.model('Skills', SkillsDBSchema)

const addNewSkill = (req, res) => {
  // Validate request body
  const { error } = SkillsValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = SkillsValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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