const Event = require("../models/event");

const getAllEvents = async () => {

  // fetch list of events
  const events = await Event.findAll();

  return {
    events,
  };
};

const getEvent = async (attributes) => {

  // fetch one event
  const event = await Event.findByPk(attributes.id);

  return {
    event
  };
};

const setEvent = async (attributes) => {

  // create one event
  const event = await Event.create({
    start_date: attributes.start_date,
    end_date: attributes.end_date,
    location: attributes.location,
    userid: attributes.userid,
    packageid: attributes.packageid,
    created_date: attributes.created_date,
    status: attributes.status,
    serviceCharge: attributes.serviceCharge,
    price: attributes.price,
    advance: attributes.advance,
    advanceStatus: attributes.advanceStatus,
    advanceDate: attributes.advanceDate,
    finalPay: attributes.finalPay,
    finalPayStatus: attributes.finalPayStatus,
    finalPayDate: attributes.finalPayDate
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    event
  };
};

const updateEvent = async (attributes) => {

  // update one event
  const event = await Event.update({
    start_date: attributes.start_date,
    end_date: attributes.end_date,
    location: attributes.location,
    userid: attributes.userid,
    packageid: attributes.packageid,
    created_date: attributes.created_date,
    status: attributes.status,
    serviceCharge: attributes.serviceCharge,
    price: attributes.price,
    advance: attributes.advance,
    advanceStatus: attributes.advanceStatus,
    advanceDate: attributes.advanceDate,
    finalPay: attributes.finalPay,
    finalPayStatus: attributes.finalPayStatus,
    finalPayDate: attributes.finalPayDate
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
    event
  };
};

const deleteEvent = async (attributes) => {

  // delete one event
  const event = await Event.destroy({
    where: { _id: attributes.id },
  });

  return {
    event
  };
};


module.exports = {
  getAllEvents,
  getEvent,
  setEvent,
  updateEvent,
  deleteEvent
}