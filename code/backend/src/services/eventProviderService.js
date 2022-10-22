const EventProvider = require("../models/eventProvider");

const getAllEventProviders = async () => {

  // fetch list of eventProviders
  const eventProviders = await EventProvider.findAll();

  return {
    eventProviders,
  };
};

const getEventProvider = async (attributes) => {

  // fetch one eventProvider
  const eventProvider = await EventProvider.findByPk(attributes.id);

  return {
    eventProvider
  };
};

const setEventProvider = async (attributes) => {

  // create one eventProvider
  const eventProvider = await EventProvider.create({
    eventid: attributes.eventid,
    providerid: attributes.providerid,
    productid: attributes.productid,
    status: attributes.status,
    providerpay: attributes.providerpay,
    providerpay_status: attributes.providerpay_status,
    providerpay_date: attributes.providerpay_date,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    eventProvider
  };
};

const updateEventProvider = async (attributes) => {

  // update one eventProvider
  const eventProvider = await EventProvider.update({
    eventid: attributes.eventid,
    providerid: attributes.providerid,
    productid: attributes.productid,
    status: attributes.status,
    providerpay: attributes.providerpay,
    providerpay_status: attributes.providerpay_status,
    providerpay_date: attributes.providerpay_date,
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
    eventProvider
  };
};

const deleteEventProvider = async (attributes) => {

  // delete one eventProvider
  const eventProvider = await EventProvider.destroy({
    where: { _id: attributes.id },
  });

  return {
    eventProvider
  };
};


module.exports = {
  getAllEventProviders,
  getEventProvider,
  setEventProvider,
  updateEventProvider,
  deleteEventProvider
}