const Eventstaff = require("../models/eventstaff");

const getAllEventstaff = async () => {

  const alleventstaff = await Eventstaff.findAll();

  return {
    alleventstaff,
  };
};

const getEventstaff = async (attributes) => {

  const eventstaff = await Eventstaff.findByPk(attributes.id);

  return {
    eventstaff
  };
};

const setEventstaff = async (attributes) => {

  const eventstaff = await Eventstaff.create({
    eventid: attributes.eventid,
    userid: attributes.userid,
    status: attributes.status

  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    eventstaff
  };
};

const updateEventstaff = async (attributes) => {

  const eventstaff = await Eventstaff.update({
    eventid: attributes.eventid,
    userid: attributes.userid,
    status: attributes.status
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
    eventstaff
  };
};

const deleteEventstaff = async (attributes) => {

  const eventstaff = await Eventstaff.destroy({
    where: { _id: attributes.id },
  });

  return {
    eventstaff
  };
};


module.exports = {
  getAllEventstaff,
  getEventstaff,
  setEventstaff,
  updateEventstaff,
  deleteEventstaff
}