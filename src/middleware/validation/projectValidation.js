const Joi = require('joi');

const validateProject = (req, res, next) => {
  const ProjectValSchema = Joi.object({
    _id: Joi.string(),
    title: Joi.string()
      .min(2)
      .max(32)
      .required(),
    prj_url: Joi.string()
      .min(8)
      .max(512)
      .required(),
    img_src: Joi.string()
      .min(4)
      .max(128)
      .required(),
    descr: Joi.string()
      .min(8)
      .max(256)
      .required(),
  })

  const { error } = ProjectValSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

module.exports = validateProject;