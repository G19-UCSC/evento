const Joi = require('joi');

const getAllProviderProductsSchema = () => Joi.object().keys({});

const getProviderProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setProviderProductSchema = () => Joi.object().keys({
    name: Joi.string().required(),
   description: Joi.string().required(),
});

const updateProviderProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
});

const deleteProviderProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
    getAllProviderProductsSchema,
    getProviderProductSchema,
    setProviderProductSchema,
    updateProviderProductSchema,
    deleteProviderProductSchema
};