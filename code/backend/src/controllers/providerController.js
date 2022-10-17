const controller = require('../controller');
const providerValidator = require('../validators/providerValidator');
const providerService = require('../services/providerService');

const getAllProviders = async (req,res) => {
    await controller(req, res, {
      validator: providerValidator.getAllProviders,
      service: providerService.getAllProviders,
    });
};

const getProvider = async (req,res) => {
    await controller(req, res,{
      validator: providerValidator.getProvider,
      service: providerService.getProvider,
    });
};

const setProvider = async (req,res) => {
    await controller(req, res,{
      validator: providerValidator.setProvider,
      service: providerService.setProvider,
    });
};
const updateProvider = async (req,res) => {
    await controller(req, res,{
      validator: providerValidator.updateProvider,
      service: providerService.updateProvider,
    });
};
const deleteProvider = async (req,res) => {
    await controller(req, res,{
      validator: providerValidator.deleteProvider,
      service: providerService.deleteProvider,
    });
};

module.exports = {
    getProvider,
    setProvider, 
    getAllProviders,
    updateProvider,
    deleteProvider
}