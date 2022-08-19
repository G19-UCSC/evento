const controller = require('../controller');
const userValidator = require('../validators/registereduserValidator');
const userService = require('../services/registereduserService');

const getAllUsers = async (req,res) => {
    await controller(req, res, {
      validator: userValidator.getAllUsers,
      service: userService.getAllUsers,
    });
};

const getUser = async (req,res) => {
    await controller(req, res,{
      validator: userValidator.getUser,
      service: userService.getUser,
    });
};

const setUser = async (req,res) => {
    await controller(req, res,{
      validator: userValidator.setUser,
      service: userService.setUser,
    });
};
const updateUser = async (req,res) => {
    await controller(req, res,{
      validator: userValidator.updateUser,
      service: userService.updateUser,
    });
};
const deleteUser = async (req,res) => {
    await controller(req, res,{
      validator: userValidator.deleteUser,
      service: userService.deleteUser,
    });
};

module.exports = {
    getUser,
    setUser, 
    getAllUsers,
    updateUser,
    deleteUser
}