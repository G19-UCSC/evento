const Joi = require('joi');

const getAllPaymentsSchema = () => Joi.object().keys({});

const getPaymentSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setPaymentSchema = () => Joi.object().keys({
  userid: Joi.string().required(),
  total: Joi.number().required(),
  providerPayStatus: Joi.string().required(),
  providerPayDate: Joi.date().required()
});

const updatePaymentSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    userid: Joi.string().required(),
    total: Joi.number().required(),
    providerPayStatus: Joi.string().required(),
    providerPayDate: Joi.date().required()
  });

const deletePaymentSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });


module.exports = {
    getAllPaymentsSchema,
    getPaymentSchema,
    setPaymentSchema,
    updatePaymentSchema,
    deletePaymentSchema
};