const controller = require('../controller');
const eventValidator = require('../validators/productValidator');
const eventService = require('../services/productService');

const getAllProducts = async (req,res) => {
    await controller(req, res, {
      validator: productValidator.getAllProducts,
      service: productService.getAllProducts,
    });
};

const getProduct = async (req,res) => {
    await controller(req, res,{
      validator: productValidator.getProduct,
      service: productService.getProduct,
    });
};

const setProduct = async (req,res) => {
    await controller(req, res,{
      validator: productValidator.setProduct,
      service: productService.setProduct,
    });
};
const updateProduct = async (req,res) => {
    await controller(req, res,{
      validator: productValidator.updateProduct,
      service: productService.updateProduct,
    });
};
const deleteProduct = async (req,res) => {
    await controller(req, res,{
      validator: productValidator.deleteProduct,
      service: productService.deleteProduct,
    });
};


module.exports = {
    getProduct, 
    updateProduct, 
    deleteProduct, 
    setProduct, 
    getAllProducts
}

