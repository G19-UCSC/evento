const controller = require('../controller');
const paymentValidator = require('../validators/paymentValidator');
const paymentService = require('../services/paymentService');

const getAllPayments = async (req,res) => {
    await controller(req, res, {
      validator: paymentValidator.getAllPayments,
      service: paymentService.getAllPayments,
    });
};

const getPayment = async (req,res) => {
    await controller(req, res,{
      validator: paymentValidator.getPayment,
      service: paymentService.getPayment,
    });
};


const setPayment = async (req,res) => {
    await controller(req, res,{
      validator: paymentValidator.setPayment,
      service: paymentService.setPayment,
    });
};
const updatePayment = async (req,res) => {
    await controller(req, res,{
      validator: paymentValidator.updatePayment,
      service: productService.updatePayment,
    });
};
const deletePayment = async (req,res) => {
    await controller(req, res,{
      validator: paymentValidator.deletePayment,
      service: paymentService.deletePayment,
    });
};


module.exports = {
    getPayment, 
    updatePayment, 
    deletePayment, 
    setPayment, 
    getAllPayments
}

