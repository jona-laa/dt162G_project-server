const Joi = require('joi');

const validateAbout = (req, res, next) => {
  const AboutValSchema = Joi.object({
    _id: Joi.string(),
    heading: Joi.string()
      .min(8)
      .max(256)
      .required(),
    bio: Joi.string()
      .min(64)
      .max(1024)
      .required(),
    img_src: Joi.string()
      .min(1)
      .max(256)
      .required(),
  })

  const { error } = AboutValSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

module.exports = validateAbout;