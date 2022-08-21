const Joi = require('joi');

const getAllSystemsSchema = () => Joi.object().keys({});

const getSystemSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setSystemSchema = () => Joi.object().keys({
    location: Joi.string(),
    contact_no: Joi.number().required(),
    penalty_rate: Joi.number().required(),
    service_rate: Joi.number().required(),
    advance_rate: Joi.number().required(),
});

const updateSystemSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    location: Joi.string(),
    contact_no: Joi.number().required(),
    penalty_rate: Joi.number().required(),
    service_rate: Joi.number().required(),
    advance_rate: Joi.number().required(),
});

const deleteSystemSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllSystemsSchema,
  getSystemSchema,
  setSystemSchema,
  updateSystemSchema,
  deleteSystemSchema
};