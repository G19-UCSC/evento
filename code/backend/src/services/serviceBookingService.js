const ServiceBooking = require("../models/serviceBooking");

const getAllServiceBookings = async () => {

  // fetch list of events
  const services = await ServiceBooking.findAll();

  return {
    services,
  };
};

const getServiceBooking = async (attributes) => {

  // fetch one event
  const service = await ServiceBooking.findByPk(attributes.id);

  return {
    service
  };
};

const setServiceBooking = async (attributes) => {

  // create one event
  const service = await ServiceBooking.create({
  userid: attributes.userid,
  productid: attributes.productid,
  timeslot:attributes.timeslot,
  Status: attributes.Status,
  cancelledOn: attributes.cancelledOn,
  cancelledBy: attributes.cancelledBy,
  CusPayStatus: attributes.CusPayStatus,
  CusPayDate: attributes.CusPayDate,
  ProviderPayStatus: attributes.ProviderPayStatus,
  ProviderPayDate: attributes.ProviderPayDate,
  commission: attributes.commission,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    service
  };
};

const updateServiceBooking = async (attributes) => {

  // update one event
  const service = await ServiceBooking.update({
    userid: attributes.userid,
    productid: attributes.productid,
    timeslot:attributes.timeslot,
    Status: attributes.Status,
    cancelledOn: attributes.cancelledOn,
    cancelledBy: attributes.cancelledBy,
    CusPayStatus: attributes.CusPayStatus,
    CusPayDate: attributes.CusPayDate,
    ProviderPayStatus: attributes.ProviderPayStatus,
    ProviderPayDate: attributes.ProviderPayDate,
    commission: attributes.commission,
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
    service
  };
};

const deleteServiceBooking = async (attributes) => {

  // delete one event
  const service = await ServiceBooking.destroy({
    where: { _id: attributes.id },
  });

  return {
    service
  };
};

module.exports = {
  getAllServiceBookings,
  getServiceBooking,
  setServiceBooking,
  updateServiceBooking,
  deleteServiceBooking
    
}
