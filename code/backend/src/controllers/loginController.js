const asyncHandler = require("express-async-handler");
const RegisteredUser = require("../models/registereduser");

const loginController = asyncHandler(async (req, res, params) => {
  try {
    
    const data = await RegisteredUser.findAll({where:{username: req.body.username, password: req.body.password}});

    if (!data){
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json(data)
    
  } catch (err) {

    // log error
    console.log(err)
    throw new Error(err)
  }
});

module.exports = loginController;