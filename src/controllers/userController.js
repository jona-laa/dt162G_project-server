const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserDBSchema } = require('../models/userModel');
const User = mongoose.model('User', UserDBSchema);

/*** REGISTER ***/
const addNewUser = async (req, res) => {
  // Check for existing users
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) return res.status(400).send('Username is already in use')

  // Gen salt & hash user password
  const salt = await bcrypt.genSalt(16);
  const hashedPassord = await bcrypt.hash(req.body.password, salt);

  // Create & Save
  let newUser = new User({
    username: req.body.username,
    password: hashedPassord
  })
  newUser.save((err, user) => {
    if (err) {
      res.status(400).json({ error: err })
    }
    res.json({ message: `User ${user.username} created` })
  })
}



/*** LOGIN ***/
const loginUser = async (req, res) => {
  // Check if user exists
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).json({ error: 'Username or password is incorrect' })

  // Check password
  const correctPassword = await bcrypt.compare(req.body.password, user.password)
  if (!correctPassword) return res.status(400).json({ error: 'Username or password is incorrect' })

  // Create JWT
  const authToken = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

  res.header('jwt', authToken).json({ "jwt": authToken });
}

module.exports = {
  addNewUser,
  loginUser
}