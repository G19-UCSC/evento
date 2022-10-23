const Joi = require('joi');


const getAllServiceBookingsSchema = () => Joi.object().keys({});

const getServiceBookingSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setServiceBookingSchema = () => Joi.object().keys({
  userid: Joi.string().required(),
  productid: Joi.string().required(),
  timeslot: Joi.date().required(),
  Status: Joi.string().required(),
  cancelledOn:Joi.date().allow(null),
  cancelledBy:Joi.string().allow(null),
  CusPayStatus: Joi.string().required(),
  CusPayDate: Joi.date().allow(null),
  ProviderPayStatus: Joi.string().required(),
  ProviderPayDate: Joi.date().allow(null),
  commission: Joi.number().required(),

});

const updateServiceBookingSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  userid: Joi.string().required(),
  productid: Joi.string().required(),
  timeslot: Joi.date().required(),
  Status: Joi.string().required(),
  cancelledOn:Joi.date().allow(null),
  cancelledBy:Joi.string().allow(null),
  CusPayStatus: Joi.string().required(),
  CusPayDate: Joi.date().allow(null),
  ProviderPayStatus: Joi.string().required(),
  ProviderPayDate: Joi.date().allow(null),
  commission: Joi.number().required(),
  
});

const deleteServiceBookingSchema = () => Joi.object().keys({
  id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

module.exports = {
  getAllServiceBookingsSchema,
  getServiceBookingSchema,
  setServiceBookingSchema,
  updateServiceBookingSchema,
  deleteServiceBookingSchema
    
};