const Joi = require('joi');

const getAllUsersSchema = () => Joi.object().keys({});

const getUserSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setUserSchema = () => Joi.object().keys({
  userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  contact: Joi.string().required(),
  address: Joi.string().required(),
  role: Joi.string().required(),
  status: Joi.string().required(),
  approvedAt: Joi.date().required(),
});

const updateUserSchema = () => Joi.object().keys({
  userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  contact: Joi.string().required(),
  address: Joi.string().required(),
  role: Joi.string().required(),
  status: Joi.string().required(),
  approvedAt: Joi.date().required()
  });

const deleteUserSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });


module.exports = {
    getAllUsersSchema,
    getUserSchema,
    setUserSchema,
    updateUserSchema,
    deleteUserSchema
};