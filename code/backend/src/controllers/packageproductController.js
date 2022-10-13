const controller = require('../controller');
const packageproductValidator = require('../validators/packageproductValidator');
const packageproductService = require('../services/packageproductService');

const getAllPackageproducts = async (req,res) => {
    await controller(req, res, {
      validator: packageproductValidator.getAllPackageproducts,
      service: packageproductService.getAllPackageproducts,
    });
};

const getPackageproduct = async (req,res) => {
    await controller(req, res,{
      validator: packageproductValidator.getPackageproduct,
      service: packageproductService.getPackageproduct,
    });
};

const setPackageproduct = async (req,res) => {
    await controller(req, res,{
      validator: packageproductValidator.setPackageproduct,
      service: packageproductService.setPackageproduct,
    });
};
const updatePackageproduct = async (req,res) => {
    await controller(req, res,{
      validator: packageproductValidator.updatePackageproduct,
      service: packageproductService.updatePackageproduct,
    });
};
const deletePackageproduct = async (req,res) => {
    await controller(req, res,{
      validator: packageproductValidator.deletePackageproduct,
      service: packageproductService.deletePackageproduct,
    });
};


module.exports = {
    getPackageproduct, 
    updatePackageproduct, 
    deletePackageproduct, 
    setPackageproduct, 
    getAllPackageproducts
}
