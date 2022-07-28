const asyncHandler = require("express-async-handler");

const controller = asyncHandler(async (req, res, params) => {
  // If there is no special responses to give, it will use the default response and reject

  try {
    // request parameter validation
    const attributes = await params.validator(req);

    // call the service function with validated data
    const data = await params.service(attributes);

    // send response
    res.status(200).json(data)
    
  } catch (err) {

    // log error
    console.log(err)
    throw new Error(err)
  }
});

module.exports = controller;