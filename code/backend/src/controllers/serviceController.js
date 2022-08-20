const controller = require('../controller');
const serviceValidator = require('../validators/serviceValidator');
const serviceService = require('../services/serviceService');

const getAllServices = async (req,res) => {
    await controller(req, res, {
      validator: serviceValidator.getAllServices,
      service: serviceService.getAllServices,
    });
};

const getService = async (req,res) => {
    await controller(req, res,{
      validator: serviceValidator.getService,
      service: serviceService.getService,
    });
};

const setService = async (req,res) => {
    await controller(req, res,{
      validator: serviceValidator.setService,
      service: serviceService.setService,
    });
};
const updateService = async (req,res) => {
    await controller(req, res,{
      validator: serviceValidator.updateService,
      service: serviceService.updateService,
    });
};
const deleteService = async (req,res) => {
    await controller(req, res,{
      validator: serviceValidator.deleteService,
      service: serviceService.deleteService,
    });
};


module.exports = {
    getService, 
    updateService, 
    deleteService, 
    setService, 
    getAllServices
}

