const controller = require('../controller');
const serviceBookingValidator = require('../validators/serviceBookingValidator');
const serviceBookingService = require('../services/serviceBookingService');

const getAllServiceBookings = async (req,res) => {
    await controller(req, res, {
      validator: serviceBookingValidator.getAllServiceBookings,
      service: serviceBookingService.getAllServiceBookings,
    });
};

const getServiceBooking = async (req,res) => {
    await controller(req, res,{
      validator: serviceBookingValidator.getServiceBooking,
      service: serviceBookingService.getServiceBooking,
    });
};

const setServiceBooking = async (req,res) => {
    await controller(req, res,{
      validator: serviceBookingValidator.setServiceBooking,
      service: serviceBookingService.setServiceBooking,
    });
};
const updateServiceBooking = async (req,res) => {
    await controller(req, res,{
      validator: serviceBookingValidator.updateServiceBooking,
      service: serviceBookingService.updateServiceBooking,
    });
};
const deleteServiceBooking = async (req,res) => {
    await controller(req, res,{
      validator: serviceBookingValidator.deleteServiceBooking,
      service: serviceBookingService.deleteServiceBooking,
    });
};


module.exports = {
    getAllServiceBookings, 
    getServiceBooking, 
    setServiceBooking, 
    updateServiceBooking, 
    deleteServiceBooking
}

