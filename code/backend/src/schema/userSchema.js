const Joi = require('joi');

const getAllUsersSchema = () => Joi.object().keys({});

const getUserSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
  });

const setUserSchema = () => Joi.object().keys({
  email: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
});

const updateUserSchema = () => Joi.object().keys({
    userid: Joi.alternatives(Joi.string(), Joi.number()).required(),
    email: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
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