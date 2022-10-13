const Joi = require('joi');

const getAllPackagesSchema = () => Joi.object().keys({});

const getPackageSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setPackageSchema = () => Joi.object().keys({
  createdBy: Joi.alternatives(Joi.string(), Joi.number()).required(),
  description: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
});

const updatePackageSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  createdBy: Joi.alternatives(Joi.string(), Joi.number()).required(),
  description: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
});

const deletePackageSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllPackagesSchema,
  getPackageSchema,
  setPackageSchema,
  updatePackageSchema,
  deletePackageSchema
};