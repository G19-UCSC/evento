const validate = async (validateFunction, attributes) => {
  const result = validateFunction.validate(attributes, {
    allowUnknown: true,
    abortEarly: false,
  });

  if (result.error) {
    const Err = new Error(
      `Request validation error: ${result.error.message || ''}`,
    );
    Err.code = 422;
    throw Err;
  }

  return attributes;
};

module.exports = validate