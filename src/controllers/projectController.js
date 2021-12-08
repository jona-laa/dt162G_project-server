import mongoose from 'mongoose'
import { ProjectSchema } from '../models/projectModel.js'

const Project = mongoose.model('Projects', ProjectSchema)

export const addNewProject = (req, res) => {
  let newProject = new Project(req.body)

  newProject.save((err, project) => {
    if (err) {
      res.send(err)
    }
    res.json(project)
  })
}

export const getProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) {
      res.send(err)
    }
    res.json(projects)
  })
}

export const getProjectByID = (req, res) => {
  Project.findById(req.params.projectID, (err, project) => {
    if (err) {
      res.send(err)
    }
    res.json(project)
  })
}

export const updateProject = (req, res) => {
  Project.findOneAndUpdate({ _id: req.params.projectID }, req.body, { new: true, useFindAndModify: false }, (err, project) => {
    if (err) {
      res.send(err)
    }
    res.json(project)
  })
}

export const deleteProject = (req, res) => {
  Project.remove({ _id: req.params.projectID }, (err, project) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted project' })
  })
}