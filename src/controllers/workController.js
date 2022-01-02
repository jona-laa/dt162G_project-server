const mongoose = require('mongoose');
const { WorkDBSchema, WorkValSchema } = require('../models/workModel.js');

const Work = mongoose.model('Work', WorkDBSchema)

const addNewWork = (req, res) => {
  // Validate request body
  const { error } = WorkValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create & Save
  let newWork = new Work(req.body)
  newWork.save((err, work) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(work)
  })
}

const getWork = (req, res) => {
  Work.find({}, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

const getWorkByID = (req, res) => {
  Work.findById(req.params.workID, (err, work) => {
    if (err) {
      res.send(err)
    }
    res.json(work)
  })
}

const updateWork = (req, res) => {
  // NEEDS AUTHORIZATION

  // Validate request body
  const { error } = WorkValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Find & Update
  Work.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, work) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(work)
  })
}

const deleteWork = (req, res) => {
  // NEEDS AUTHORIZATION
  Work.deleteOne({ _id: req.body._id }, (err, work) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json({ message: 'Successfully deleted job' })
  })
}

module.exports = {
  addNewWork,
  getWork,
  getWorkByID,
  updateWork,
  deleteWork
}