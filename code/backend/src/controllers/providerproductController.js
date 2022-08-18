const controller = require('../controller');
const providerproductValidator = require('../validators/providerproductValidator');
const providerproductService = require('../services/providerproductService');

const getAllProviderProducts = async (req, res) => {
    await controller(req, res, {
        validator: providerproductValidator.getAllProviderProducts,
        service: providerproductService.getAllProviderProducts,
    });
};

const getProviderProduct = async (req, res) => {
    await controller(req, res, {
        validator: providerproductValidator.getProviderProduct,
        service: providerproductService.getProviderProduct,
    });
};

const setProviderProduct = async (req, res) => {
    await controller(req, res, {
        validator: providerproductValidator.setProviderProduct,
        service: providerproductService.setProviderProduct,
    });
};
const updateProviderProduct = async (req, res) => {
    await controller(req, res, {
        validator: providerproductValidator.updateProviderProduct,
        service: providerproductService.updateProviderProduct,
    });
};
const deleteProviderProduct = async (req, res) => {
    await controller(req, res, {
        validator: providerproductValidator.deleteProviderProduct,
        service: providerproductService.deleteProviderProduct,
    });
};


module.exports = {
    getProviderProduct,
    updateProviderProduct,
    deleteProviderProduct,
    setProviderProduct,
    getAllProviderProducts
}

