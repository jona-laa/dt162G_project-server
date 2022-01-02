const router = require('express').Router();
const { addNewUser } = require('../controllers/userController');

router
  .post('/register', addNewUser)

router
  .post('/login', (req, res) => {
    res.send('Login')
  })
module.exports = router;
