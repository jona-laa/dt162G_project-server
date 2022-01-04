const Joi = require('joi');

const validateUser = (req, res, next) => {
  const UserValSchema = Joi.object({
    _id: Joi.string(),
    username: Joi.string()
      .min(5)
      .max(256)
      .required(),
    password: Joi.string()
      .min(8)
      .max(256)
      .required(),
  })

  const { error } = UserValSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message)
  } else {
    next();
  }
}

module.exports = validateUser;