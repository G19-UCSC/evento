const Joi = require('joi');

const getAllProvidersSchema = () => Joi.object().keys({});

const getProviderSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setProviderSchema = () => Joi.object().keys({
  userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  businessName: Joi.string().required(),
  location: Joi.string().required(),
  
});

const updateProviderSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
    businessName: Joi.string().required(),
    location: Joi.string().required(),
  });

const deleteProviderSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });


module.exports = {
    getAllProvidersSchema,
    getProviderSchema,
    setProviderSchema,
    updateProviderSchema,
    deleteProviderSchema
};