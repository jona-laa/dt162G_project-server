const Joi = require('joi');

const validateSkill = (req, res, next) => {
  const SkillsValSchema = Joi.object({
    _id: Joi.string(),
    name: Joi.string()
      .min(2)
      .max(32)
      .required(),
    icon: Joi.string()
      .min(8)
      .max(32)
      .required()
  })

  const { error } = SkillsValSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

module.exports = validateSkill;