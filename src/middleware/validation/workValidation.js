const Joi = require('joi');

const validateWork = (req, res, next) => {
  const WorkValSchema = Joi.object({
    _id: Joi.string(),
    company: Joi.string()
      .min(4)
      .max(64)
      .required(),
    title: Joi.string()
      .min(4)
      .max(64)
      .required(),
    date_start: Joi.date()
      .required(),
    date_end: Joi.date().allow('').optional(),
    descr: Joi.string()
      .min(8)
      .max(128)
      .required()
  })

  const { error } = WorkValSchema.validate(req.body);
  if (error) {
    res.status(400).json({ 'error': error.details[0].message });
  } else {
    next();
  }
}

module.exports = validateWork;