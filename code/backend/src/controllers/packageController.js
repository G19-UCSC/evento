const controller = require('../controller');
const packageValidator = require('../validators/packageValidator');
const packageService = require('../services/packageService');

const getAllPackages = async (req,res) => {
    await controller(req, res, {
      validator: packageValidator.getAllPackages,
      service: packageService.getAllPackages,
    });
};

const getPackage = async (req,res) => {
    await controller(req, res,{
      validator: packageValidator.getPackage,
      service: packageService.getPackage,
    });
};

const setPackage = async (req,res) => {
    await controller(req, res,{
      validator: packageValidator.setPackage,
      service: packageService.setPackage,
    });
};
const updatePackage = async (req,res) => {
    await controller(req, res,{
      validator: packageValidator.updatePackage,
      service: packageService.updatePackage,
    });
};
const deletePackage = async (req,res) => {
    await controller(req, res,{
      validator: packageValidator.deletePackage,
      service: packageService.deletePackage,
    });
};


module.exports = {
    getPackage, 
    updatePackage, 
    deletePackage, 
    setPackage, 
    getAllPackages
}
