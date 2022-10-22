const controller = require('../controller');
const eventstaffValidator = require('../validators/eventstaffValidator');
const eventstaffService = require('../services/eventstaffService');

const getAllEventstaff = async (req, res) => {
  await controller(req, res, {
    validator: eventstaffValidator.getAllEventstaff,
    service: eventstaffService.getAllEventstaff,
  });
};

const getEventstaff = async (req, res) => {
  await controller(req, res, {
    validator: eventstaffValidator.getEventstaff,
    service: eventstaffService.getEventstaff,
  });
};

const setEventstaff = async (req, res) => {
  await controller(req, res, {
    validator: eventstaffValidator.setEventstaff,
    service: eventstaffService.setEventstaff,
  });
};
const updateEventstaff = async (req, res) => {
  await controller(req, res, {
    validator: eventstaffValidator.updateEventstaff,
    service: eventstaffService.updateEventstaff,
  });
};
const deleteEventstaff = async (req, res) => {
  await controller(req, res, {
    validator: eventstaffValidator.deleteEventstaff,
    service: eventstaffService.deleteEventstaff
  });
};


module.exports = {
  getEventstaff,
  updateEventstaff,
  deleteEventstaff,
  setEventstaff,
  getAllEventstaff
}

