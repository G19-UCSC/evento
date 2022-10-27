const Joi = require('joi');

const getAllReviewsSchema = () => Joi.object().keys({});

const getReviewSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setReviewSchema = () => Joi.object().keys({
    productid: Joi.string().required(),
    userid: Joi.string().required(),
    review: Joi.string().allow(null),
    rating: Joi.number().required(),
});

const updateReviewSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    productid: Joi.string().required(),
    userid: Joi.string().required(),
    review: Joi.string().allow(null),
    rating: Joi.number().required(),
});

const deleteReviewSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
    getAllReviewsSchema,
    getReviewSchema,
    setReviewSchema,
    updateReviewSchema,
    deleteReviewSchema
};