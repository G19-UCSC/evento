const bcrypt = require('bcryptjs');
const asyncHandler = require("express-async-handler");
const RegisteredUser = require("../models/registereduser");

const loginController = asyncHandler(async (req, res, params) => {
  try {

    
    const user = await RegisteredUser.findAll({where:{username: req.body.username}});

    if(user && (await bcrypt.compare(req.body.password,user[0].dataValues.password))){

      res.status(200).json(user)

    }else{
      res.status(404);
      throw new Error("User not found");
    }
    
  } catch (err) {

    // log error
    console.log(err)
    throw new Error(err)
  }
});

module.exports = loginController;