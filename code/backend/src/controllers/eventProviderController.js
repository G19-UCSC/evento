const controller = require('../controller');
const eventProviderValidator = require('../validators/eventProviderValidator');
const eventProviderService = require('../services/eventProviderService');

const getAllEventProviders = async (req,res) => {
    await controller(req, res, {
      validator: eventProviderValidator.getAllEventProviders,
      service: eventProviderService.getAllEventProviders,
    });
};

const getEventProvider = async (req,res) => {
    await controller(req, res,{
      validator: eventProviderValidator.getEventProvider,
      service: eventProviderService.getEventProvider,
    });
};

const setEventProvider = async (req,res) => {
    await controller(req, res,{
      validator: eventProviderValidator.setEventProvider,
      service: eventProviderService.setEventProvider,
    });
};
const updateEventProvider = async (req,res) => {
    await controller(req, res,{
      validator: eventProviderValidator.updateEventProvider,
      service: eventProviderService.updateEventProvider,
    });
};
const deleteEventProvider = async (req,res) => {
    await controller(req, res,{
      validator: eventProviderValidator.deleteEventProvider,
      service: eventProviderService.deleteEventProvider,
    });
};


module.exports = {
    getEventProvider, 
    updateEventProvider, 
    deleteEventProvider, 
    setEventProvider, 
    getAllEventProviders
}

