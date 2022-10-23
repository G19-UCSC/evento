const controller = require('../controller');
const productPaymentValidator = require('../validators/productPaymentValidator');
const productPaymentService = require('../services/productPaymentService');


const getAllProductPayments = async (req,res) => {
  await controller(req, res, {
    validator: productPaymentValidator.getAllProductPayments,
    service: productPaymentService.getAllProductPayments,
  });
};

const getProductPayment = async (req,res) => {
  await controller(req, res,{
    validator: productPaymentValidator.getProductPayment,
    service: productPaymentService.getProductPayment,
  });
};

const setProductPayment = async (req,res) => {
    await controller(req, res,{
      validator: productPaymentValidator.setProductPayment,
      service: productPaymentService.setProductPayment,
    });
};


const updateProductPayment = async (req,res) => {
  await controller(req, res,{
    validator: productPaymentValidator.updateProductPayment,
    service: productPaymentService.updateProductPayment,
  });
};
const deleteProductPayment = async (req,res) => {
  await controller(req, res,{
    validator: productPaymentValidator.deleteProductPayment,
    service: productPaymentService.deleteProductPayment,
  });
};


module.exports = {
  getAllProductPayments, 
  getProductPayment, 
  setProductPayment, 
  updateProductPayment, 
  deleteProductPayment
}