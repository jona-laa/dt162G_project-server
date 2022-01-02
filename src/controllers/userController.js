const mongoose = require('mongoose');
const { UserDBSchema, UserValSchema } = require('../models/userModel');

const User = mongoose.model('User', UserDBSchema);

const addNewUser = async (req, res) => {
  // Validate request body
  const { error } = UserValSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create & Save
  let newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) {
      res.status(400).send(err)
    }
    res.json(user)
  })
}

module.exports = {
  addNewUser,
  // getSkills,
  // getSkillByID,
  // updateSkill,
  // deleteSkill
}