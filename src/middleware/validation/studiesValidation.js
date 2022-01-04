const Joi = require('joi');

const validateStudies = (req, res, next) => {
  const StudiesValSchema = Joi.object({
    _id: Joi.string(),
    institution: Joi.string()
      .min(4)
      .max(64)
      .required(),
    title: Joi.string()
      .min(4)
      .max(64)
      .required(),
    date_start: Joi.date()
      .required(),
    date_end: Joi.date()
      .required(),
    descr: Joi.string()
      .min(8)
      .max(128)
      .required()
  })

  const { error } = StudiesValSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

module.exports = validateStudies;