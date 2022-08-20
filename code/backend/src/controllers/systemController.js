const controller = require('../controller');
const systemValidator = require('../validators/systemValidator');
const systemService = require('../services/systemService');

const getAllSystems = async (req,res) => {
    await controller(req, res, {
      validator: systemValidator.getAllSystems,
      service: systemService.getAllSystems,
    });
};

const getSystem = async (req,res) => {
    await controller(req, res,{
      validator: systemValidator.getSystem,
      service: systemService.getSystem,
    });
};

const setSystem = async (req,res) => {
    await controller(req, res,{
      validator: systemValidator.setSystem,
      service: systemService.setSystem,
    });
};
const updateSystem = async (req,res) => {
    await controller(req, res,{
      validator: systemValidator.updateSystem,
      service: systemService.updateSystem,
    });
};
const deleteSystem = async (req,res) => {
    await controller(req, res,{
      validator: systemValidator.deleteSystem,
      service: systemService.deleteSystem,
    });
};


module.exports = {
    getSystem, 
    updateSystem, 
    deleteSystem, 
    setSystem, 
    getAllSystems
}
