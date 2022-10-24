const Joi = require('joi');


const getAllProductPaymentsSchema = () => Joi.object().keys({});

const getProductPaymentSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setProductPaymentSchema = () => Joi.object().keys({
  userid: Joi.string().required(),
  productid: Joi.string().required(),
  quantity: Joi.number().required(),
  purchaseDate: Joi.date().required(),
  price: Joi.number().required(),
  commission: Joi.number().required(),
  CusPayStatus: Joi.string().required(),
  CusPayDate: Joi.date().allow(null),
  ProviderPayStatus: Joi.string().required(),
  ProviderPayDate: Joi.date().allow(null),

});

const updateProductPaymentSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  userid: Joi.string().required(),
  productid: Joi.string().required(),
  quantity: Joi.number().required(),
  purchaseDate: Joi.date().required(),
  price: Joi.number().required(),
  commission: Joi.number().required(),
  CusPayStatus: Joi.string().required(),
  CusPayDate: Joi.date().allow(null),
  ProviderPayStatus: Joi.string().required(),
  ProviderPayDate: Joi.date().allow(null),
  
});

const deleteProductPaymentSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

module.exports = {
  getAllProductPaymentsSchema,
  getProductPaymentSchema,
  setProductPaymentSchema,
  updateProductPaymentSchema,
  deleteProductPaymentSchema
    
};