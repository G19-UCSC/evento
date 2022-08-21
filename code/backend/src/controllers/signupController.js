const asyncHandler = require("express-async-handler");
const RegisteredUser = require("../models/registereduser");
const User = require("../models/user");

const SignupController = asyncHandler(async (req, res, params) => {
  try {

    var data = {}; 
    
    if(req.body.username){
      data = await RegisteredUser.findAll({where:{username: req.body.username}});
    }

    if(req.body.email){
      data = await User.findAll({where:{email: req.body.email}});
    }

    if (data.length != 0){
        console.log(data.length)
        res.status(400);
        throw new Error("found");
    }

    res.status(200).json(data)
    
  } catch (err) {

    // log error
    console.log(err)
    throw new Error(err)
  }
});

module.exports = SignupController;