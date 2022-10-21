const Joi = require('joi');

const getAllEventProvidersSchema = () => Joi.object().keys({});

const getEventProviderSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setEventProviderSchema = () => Joi.object().keys({
  eventid: Joi.string().required(),
  providerid: Joi.string().required(),
  productid: Joi.string().required(),
  status: Joi.string().required(),
  providerpay: Joi.number().allow(null),
  providerpay_status: Joi.string().required(),
  providerpay_date: Joi.date().allow(null),
});

const updateEventProviderSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  eventid: Joi.string().required(),
  providerid: Joi.string().required(),
  productid: Joi.string().required(),
  status: Joi.string().required(),
  providerpay: Joi.number().allow(null),
  providerpay_status: Joi.string().required(),
  providerpay_date: Joi.date().allow(null),
});

const deleteEventProviderSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllEventProvidersSchema,
  getEventProviderSchema,
  setEventProviderSchema,
  updateEventProviderSchema,
  deleteEventProviderSchema
};