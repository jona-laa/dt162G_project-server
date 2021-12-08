import mongoose from 'mongoose'
import { SkillsSchema } from '../models/skillsModel.js'

const Skills = mongoose.model('Skills', SkillsSchema)

export const addNewSkill = (req, res) => {
  let newSkill = new Skills(req.body)

  newSkill.save((err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

export const getSkills = (req, res) => {
  Skills.find({}, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

export const getSkillByID = (req, res) => {
  Skills.findById(req.params.skillID, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

export const updateSkill = (req, res) => {
  Skills.findOneAndUpdate({ _id: req.params.skillID }, req.body, { new: true, useFindAndModify: false }, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json(skill)
  })
}

export const deleteSkill = (req, res) => {
  Skills.remove({ _id: req.params.skillID }, (err, skill) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted skill ' })
  })
}