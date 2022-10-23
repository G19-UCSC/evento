const ProductPayment = require("../models/productPayment");

const getAllProductPayments = async () => {

  // fetch list of events
  const payments = await ProductPayment.findAll();

  return {
    payments,
  };
};

const getProductPayment = async (attributes) => {

  // fetch one event
  const payment = await ProductPayment.findByPk(attributes.id);

  return {
    payment
  };
};

const setProductPayment = async (attributes) => {

  // create one event
  const payment = await ProductPayment.create({
  userid: attributes.userid,
  productid: attributes.productid,
  quantity: attributes.quantity,
  purchaseDate: attributes.purchaseDate,
  price: attributes.price,
  commission: attributes.commission,
  CusPayStatus: attributes.CusPayStatus,
  CusPayDate: attributes.CusPayDate,
  ProviderPayStatus: attributes.ProviderPayStatus,
  ProviderPayDate: attributes.ProviderPayDate,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    payment
  };
};

const updateProductPayment = async (attributes) => {

  // update one event
  const payment = await ProductPayment.update({
  userid: attributes.userid,
  productid: attributes.productid,
  quantity: attributes.quantity,
  purchaseDate: attributes.purchaseDate,
  price: attributes.price,
  commission: attributes.commission,
  CusPayStatus: attributes.CusPayStatus,
  CusPayDate: attributes.CusPayDate,
  ProviderPayStatus: attributes.ProviderPayStatus,
  ProviderPayDate: attributes.ProviderPayDate,
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
    payment
  };
};

const deleteProductPayment = async (attributes) => {

  // delete one event
  const payment = await ProductPayment.destroy({
    where: { _id: attributes.id },
  });

  return {
    payment
  };
};

module.exports = {
  getAllProductPayments,
  getProductPayment,
  setProductPayment,
  updateProductPayment,
  deleteProductPayment
    
}
