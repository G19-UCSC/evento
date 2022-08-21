const Joi = require('joi');


const setProductPaymentSchema = () => Joi.object().keys({
  productid: Joi.string().required(),
  paymentid: Joi.string().required(),
  count: Joi.number().required(),
  
});

module.exports = {
    setProductPaymentSchema
    
};