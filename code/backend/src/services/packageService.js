const Package = require("../models/package");

const getAllPackages = async () => {
    
  const packages = await Package.findAll();

  return {
    packages,
  };
};

const getPackage = async (attributes) => {

  const package = await Package.findByPk(attributes.id);

  return {
    package
  };
};

const setPackage = async (attributes) => {

  const package = await Package.create({
    createdBy: attributes.createdBy,
    description: attributes.description,
    name: attributes.name,
    price: attributes.price,
    category: attributes.category,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    package
  };
};

const updatePackage = async (attributes) => {

  const package = await Package.update({
    createdBy: attributes.createdBy,
    description: attributes.description,
    name: attributes.name,
    price: attributes.price,
    category: attributes.category,
  }, {
    where: { _id: attributes.id },
    returning: true,
    plain: true
  }).then((res) => {
    console.log(`Update successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    package
  };
};

const deletePackage = async (attributes) => {

  const package = await Package.destroy({
    where: { _id: attributes.id },
  });

  return {
    package
  };
};


module.exports = {
  getAllPackages,
  getPackage,
  setPackage,
  updatePackage,
  deletePackage
}