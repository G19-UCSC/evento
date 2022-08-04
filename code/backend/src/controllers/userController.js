const controller = require("../controller");
const userService = require('../services/userService');
const userValidator = require('../validators/userValidator');

const getAllUsers = async (req,res)=>{
    await controller(req, res, {
        validator: userValidator.getAllUsers,
        service: userService.getAllUsers
    });
};

const getUser = async (req,res)=>{
    await controller(req, res, {
        validator: userValidator.getUser,
        service: userService.getUser
    });
};

const setUser = async (req,res)=>{
    await controller(req, res, {
        validator: userValidator.setUser,
        service: userService.setUser
    });
};

module.exports = {
    getAllUsers,
    getUser,
    setUser
}