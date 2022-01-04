const router = require('express').Router();
const { addNewUser, loginUser } = require('../controllers/userController');
const { verifyRegister } = require('../middleware/verification/tokenVerification');
const validateUser = require('../middleware/validation/userValidation');

router
  .post(
    '/register',
    verifyRegister,
    validateUser,
    addNewUser
  );

router
  .post(
    '/login',
    validateUser,
    loginUser
  );

module.exports = router;
