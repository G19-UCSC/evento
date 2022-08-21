const Joi = require('joi');

const getAllPackageproductsSchema = () => Joi.object().keys({});

const getPackageproductSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setPackageproductSchema = () => Joi.object().keys({
  packageid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  productid: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const updatePackageproductSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  packageid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  productid: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const deletePackageproductSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllPackageproductsSchema,
  getPackageproductSchema,
  setPackageproductSchema,
  updatePackageproductSchema,
  deletePackageproductSchema
};