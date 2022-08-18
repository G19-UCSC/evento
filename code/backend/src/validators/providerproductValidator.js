const validate = require('../utilities/validationHelper')
const {
    getAllProviderProductsSchema,
    getProviderProductSchema,
    setProviderProductSchema,
    updateProviderProductSchema,
    deleteProviderProductSchema
} = require('../schema/providerproductSchema');

const getAllProviderProducts = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllproviderproductsSchema(), attributes);
};

const getProviderProduct = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getProviderProductSchema(), attributes);
};

const setProviderProduct = async (req) => {

    const attributes = {
        title: req.body.title,
        location: req.body.location,
        category: req.body.category,
        date: req.body.date
    }

    return validate(setProviderProductSchema(), attributes);
};

const updateProviderProduct = async (req) => {

    const attributes = {
        id: req.params.id,
        title: req.body.title,
        location: req.body.location,
        category: req.body.category,
        date: req.body.date
    }

    return validate(updateProviderProductSchema(), attributes);
};

const deleteProviderProduct = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteProviderProductSchema(), attributes);

};

module.exports = {
    getAllProviderProducts,
    getProviderProduct,
    setProviderProduct,
    updateProviderProduct,
    deleteProviderProduct
}