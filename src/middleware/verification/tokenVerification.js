const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('jwt');
  if (!token) return res.status(401).json({ 'message': 'Unauthorized request' })

  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = isVerified;
    next();
  } catch (error) {
    res.status(401).json({ 'message': 'Unauthorized request' });
  }
}

const verifyRegister = (req, res, next) => {
  const token = req.header('registerToken');
  if (!token) return res.status(401).json({ 'message': 'Unauthorized request' })

  if (token === process.env.REGISTER_TOKEN) {
    next()
  } else {
    res.status(401).json({ 'message': 'Unauthorized request' });
  }
}

module.exports = {
  verifyToken,
  verifyRegister
};