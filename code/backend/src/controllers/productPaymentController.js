const controller = require('../controller');
const productPaymentValidator = require('../validators/productPaymentValidator');
const productPaymentService = require('../services/productPaymentService');




const setProductPayment = async (req,res) => {
    await controller(req, res,{
      validator: productPaymentValidator.setProductPayment,
      service: productPaymentService.setProductPayment,
    });
};



module.exports = { 
    setProductPayment
    
}