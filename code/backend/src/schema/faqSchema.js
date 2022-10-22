const Joi = require('joi');

const getAllFAQsSchema = () => Joi.object().keys({});

const getFAQSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setFAQSchema = () => Joi.object().keys({
    userid: Joi.string().allow(null),
    question: Joi.string().required(),
    answer: Joi.string().allow(null),
});

const updateFAQSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    userid: Joi.string().allow(null),
    question: Joi.string().required(),
    answer: Joi.string().allow(null),
});

const deleteFAQSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
    getAllFAQsSchema,
    getFAQSchema,
    setFAQSchema,
    updateFAQSchema,
    deleteFAQSchema
};