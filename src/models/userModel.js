const mongoose = require('mongoose');
const Joi = require('joi');

// VALIDATION SCHEMA
const validateUser = (userData) => {
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
  return UserValSchema.validate(userData);
}



// DB SCHEMA
const Schema = mongoose.Schema
const UserDBSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 256
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 256
  }
},
  {
    timestamps: true,
    collection: 'users'
  })

module.exports = {
  UserDBSchema,
  validateUser,
};