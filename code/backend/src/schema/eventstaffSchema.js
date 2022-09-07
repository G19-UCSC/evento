const Joi = require('joi');

const getAllEventstaffSchema = () => Joi.object().keys({});

const getEventstaffSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setEventstaffSchema = () => Joi.object().keys({
  eventid: Joi.string().required(),
  userid: Joi.string().required(),
  status: Joi.string().required(),
});

const updateEventstaffSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  eventid: Joi.string().required(),
  userid: Joi.string().required(),
  status: Joi.string().required(),
});

const deleteEventstaffSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
  getAllEventstaffSchema,
  getEventstaffSchema,
  setEventstaffSchema,
  updateEventstaffSchema,
  deleteEventstaffSchema
};