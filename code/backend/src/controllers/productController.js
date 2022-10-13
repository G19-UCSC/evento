const controller = require('../controller');
const productValidator = require('../validators/productValidator');
const productService = require('../services/productService');

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

const getProductCategory = async (req,res) => {
  await controller(req, res,{
    validator: productValidator.getProductCategory,
    service: productService.getProductCategory,
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
    getAllProducts,
    getProductCategory
}

