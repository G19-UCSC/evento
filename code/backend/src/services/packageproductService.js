const Packageproduct = require("../models/packageproduct");

const getAllPackageproducts = async () => {
    
  const packageproducts = await Packageproduct.findAll();

  return {
    packageproducts,
  };
};

const getPackageproduct = async (attributes) => {

  const packageproduct = await Packageproduct.findByPk(attributes.id);

  return {
    packageproduct
  };
};

const setPackageproduct = async (attributes) => {

  const packageproduct = await Packageproduct.create({
    packageid: attributes.packageid,
    productid: attributes.productid,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    packageproduct
  };
};

const updatePackageproduct = async (attributes) => {

  const packageproduct = await Packageproduct.update({
    packageid: attributes.packageid,
    productid: attributes.productid,
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
    packageproduct
  };
};

const deletePackageproduct = async (attributes) => {

  const packageproduct = await Packageproduct.destroy({
    where: { _id: attributes.id },
  });

  return {
    packageproduct
  };
};


module.exports = {
  getAllPackageproducts,
  getPackageproduct,
  setPackageproduct,
  updatePackageproduct,
  deletePackageproduct
}