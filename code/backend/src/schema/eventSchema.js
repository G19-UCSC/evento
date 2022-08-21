const Joi = require('joi');

const getAllEeventsSchema = () => Joi.object().keys({});

const getEventSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setEventSchema = () => Joi.object().keys({
  title: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  location: Joi.string().required(),
  maxPeople: Joi.number().required(),
  userid: Joi.string().required(),
  packageid: Joi.string().required(),
  created_date: Joi.date().required(),
  status: Joi.string().required(),
  serviceCharge: Joi.string().required(),
  price: Joi.number().required(),
  advance: Joi.string().allow(null),
  advanceStatus: Joi.string().required(),
  advanceDate: Joi.date().allow(null),
  finalPay: Joi.string().allow(null),
  finalPayStatus: Joi.string().required(),
  finalPayDate: Joi.date().allow(null),
});

const updateEventSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  title: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  location: Joi.string().required(),
  maxPeople: Joi.number().required(),
  userid: Joi.string().required(),
  packageid: Joi.string().required(),
  created_date: Joi.date().required(),
  status: Joi.string().required(),
  serviceCharge: Joi.string().required(),
  price: Joi.number().required(),
  advance: Joi.string().allow(null),
  advanceStatus: Joi.string().required(),
  advanceDate: Joi.date().allow(null),
  finalPay: Joi.string().allow(null),
  finalPayStatus: Joi.string().required(),
  finalPayDate: Joi.date().allow(null),
});

const deleteEventSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllEeventsSchema,
  getEventSchema,
  setEventSchema,
  updateEventSchema,
  deleteEventSchema
};