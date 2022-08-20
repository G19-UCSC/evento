const System = require("../models/system");

const getAllSystems = async () => {
    
  const systems = await System.findAll();

  return {
    systems,
  };
};

const getSystem = async (attributes) => {

  const system = await System.findByPk(attributes.id);

  return {
    system
  };
};

const setSystem = async (attributes) => {

  const system = await System.create({
    location: attributes.location,
    contact_no: attributes.contact_no,
    penalty_rate: attributes.penalty_rate,
    service_rate: attributes.service_rate,
    advance_rate: attributes.advance_rate,
  }).then((res) => {
    console.log(`Insert successful: ${res._id}`);
    return {
      res
    };
  }).catch((err) => {
    console.log(`Error: ${err}`);
  });

  return {
    system
  };
};

const updateSystem = async (attributes) => {

  const system = await System.update({
    location: attributes.location,
    contact_no: attributes.contact_no,
    penalty_rate: attributes.penalty_rate,
    service_rate: attributes.service_rate,
    advance_rate: attributes.category,
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
    system
  };
};

const deleteSystem = async (attributes) => {

  const system = await System.destroy({
    where: { _id: attributes.id },
  });

  return {
    system
  };
};


module.exports = {
  getAllSystems,
  getSystem,
  setSystem,
  updateSystem,
  deleteSystem
}