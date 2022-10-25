const Joi = require('joi');

const getAllProductsSchema = () => Joi.object().keys({});

const getProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const getProductCategorySchema = () => Joi.object().keys({
    category: Joi.string().required()
});


const setProductSchema = () => Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
    category: Joi.string().required(),
    comission: Joi.number().precision(2).required(),
    count: Joi.number().required(),
    image_path: Joi.string().required(),
    userid: Joi.string().required(),
});

const updateProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
    category: Joi.string().required(),
    comission: Joi.number().precision(2).required(),
    count: Joi.number().required(),
    image_path: Joi.string().required(),
    userid: Joi.string().required(),
});

const deleteProductSchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});


module.exports = {
    getAllProductsSchema,
    getProductSchema,
    setProductSchema,
    updateProductSchema,
    deleteProductSchema,
    getProductCategorySchema
};