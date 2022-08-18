const ProviderProduct = require("../models/product");

const getAllProviderProducts = async () => {

    // fetch list of providerproducts
    const products = await ProviderProduct.findAll();

    return {
        providerproducts,
    };
};

const getProviderProduct = async (attributes) => {

    // fetch one providerproduct
    const providerproduct = await ProviderProduct.findByPk(attributes.id);

    return {
        providerproduct
    };
};

const setProviderProduct = async (attributes) => {

    // create one providerproduct
    const providerproduct = await ProviderProduct.create({
        title: attributes.title,
        location: attributes.location,
        category: attributes.category,
        date: attributes.date
    }).then((res) => {
        console.log(`Insert successful: ${res._id}`);
        return {
            res
        };
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });

    return {
        providerproduct
    };
};

const updateProviderProduct = async (attributes) => {

    // update one providerproduct
    const providerproduct = await ProviderProduct.update({
        title: attributes.title,
        location: attributes.location,
        category: attributes.category,
        date: attributes.date

    }, {
        where: { _id: attributes.id },
        returning: true,
        plain: true
    }).then((res) => {
        console.log(`Update successful: ${res._id}`);
        return {
            res
        };
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });

    return {
        providerproduct
    };
};

const deleteProviderProduct = async (attributes) => {

    // delete one providerproduct
    const providerproduct = await ProviderProduct.destroy({
        where: { _id: attributes.id },
    });

    return {
        providerproduct
    };
};


module.exports = {
    getAllProviderProducts,
    getProviderProduct,
    setProviderProduct,
    updateProviderProduct,
    deleteProviderProduct
}