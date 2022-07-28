const Joi = require('joi');

const getAllEeventsSchema = () => Joi.object().keys({});

const getEventSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setEventSchema = () => Joi.object().keys({
  title: Joi.string().required(),
  location: Joi.string().required(),
  category: Joi.string().required(),
  date: Joi.date().required(),
});

const updateEventSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    title: Joi.string().required(),
    location: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.date().required(),
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