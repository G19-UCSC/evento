const controller = require('../controller');
const eventValidator = require('../validators/eventValidator');
const eventService = require('../services/eventService');

const getAllEvents = async (req,res) => {
    await controller(req, res, {
      validator: eventValidator.getAllEvents,
      service: eventService.getAllEvents,
    });
};

const getEvent = async (req,res) => {
    await controller(req, res,{
      validator: eventValidator.getEvent,
      service: eventService.getEvent,
    });
};

const setEvent = async (req,res) => {
    await controller(req, res,{
      validator: eventValidator.setEvent,
      service: eventService.setEvent,
    });
};
const updateEvent = async (req,res) => {
    await controller(req, res,{
      validator: eventValidator.updateEvent,
      service: eventService.updateEvent,
    });
};
const deleteEvent = async (req,res) => {
    await controller(req, res,{
      validator: eventValidator.deleteEvent,
      service: eventService.deleteEvent,
    });
};


module.exports = {
    getEvent, 
    updateEvent, 
    deleteEvent, 
    setEvent, 
    getAllEvents
}

