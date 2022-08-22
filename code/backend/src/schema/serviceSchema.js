const Joi = require('joi');

const getAllServicesSchema = () => Joi.object().keys({});

const getServiceSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setServiceSchema = () => Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  category: Joi.string().required(),
  comission: Joi.number().precision(2).required(),
  image_path : Joi.string().required(),
  discount: Joi.number().required(),
  timeSlots: Joi.array().required(),
  userid: Joi.string().required(),
});

const updateServiceSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required(),
    comission: Joi.number().precision(2).required(),
    image_path : Joi.string().required(),
    discount: Joi.number().required(),
    timeSlots: Joi.array().required(),
    userid: Joi.string().required(),
  });

const deleteServiceSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });


module.exports = {
    getAllServicesSchema,
    getServiceSchema,
    setServiceSchema,
    updateServiceSchema,
    deleteServiceSchema
};