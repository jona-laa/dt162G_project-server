const mongoose = require('mongoose');
const { ProjectDBSchema, ProjectValSchema } = require('../models/projectModel.js');

const Project = mongoose.model('Projects', ProjectDBSchema)

const addNewProject = (req, res) => {
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = ProjectValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create & Save
  let newProject = new Project(req.body)
  newProject.save((err, project) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(project)
  })
}

const getProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) {
      res.send(err)
    }
    res.json(projects)
  })
}

const getProjectByID = (req, res) => {
  console.log('prj by id runs', req.params.projectID)
  Project.findById(req.params.projectID, (err, project) => {
    if (err) {
      res.send(err)
    }
    res.json(project)
  })
}

const updateProject = (req, res) => {
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = ProjectValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Find & Update
  Project.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, project) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(project)
  })
}

const deleteProject = (req, res) => {
  Project.deleteOne({ _id: req.body._id }, (err, project) => {
    if (err) {
      res.status(400).send(err)
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