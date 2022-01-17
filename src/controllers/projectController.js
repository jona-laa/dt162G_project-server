const mongoose = require('mongoose');
const { ProjectDBSchema } = require('../models/projectModel.js');

const Project = mongoose.model('Projects', ProjectDBSchema)

const addNewProject = (req, res) => {
  // Create & Save
  let newProject = new Project(req.body)
  newProject.save((err, project) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(project)
  })
}

const getProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(projects)
  })
}

const getProjectByID = (req, res) => {
  Project.findById(req.params.projectID, (err, project) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(project)
  })
}

const updateProject = (req, res) => {
  // Find & Update
  Project.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, project) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json(project)
  })
}

const deleteProject = (req, res) => {
  Project.deleteOne({ _id: req.body._id }, (err, project) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json({ message: 'Successfully deleted project' })
  })
}

module.exports = {
  addNewProject,
  getProjects,
  getProjectByID,
  updateProject,
  deleteProject
}