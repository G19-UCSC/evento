const validate = require('../utilities/validationHelper')
const {
    getAllServiceBookingsSchema,
    getServiceBookingSchema,
    setServiceBookingSchema,
    updateServiceBookingSchema,
    deleteServiceBookingSchema
    
} = require('../schema/ServiceBookingSchema');

const getAllServiceBookings = async (req) => {

    const attributes = { id: req.params.id }

    return validate(getAllServiceBookingsSchema(), attributes);
};

const getServiceBooking= async (req) => {

    const attributes = { id: req.params.id }

    return validate(getServiceBookingSchema(), attributes);
};

const setServiceBooking = async (req) => {

    const attributes = {
        userid: req.params.userid,
        productid: req.params.productid,
        timeslot: req.params.timeslot,
        Status: req.params.Status,
        cancelledOn: req.params.cancelledOn,
        cancelledBy: req.params.cancelledBy,
        CusPayStatus: req.params.CusPayStatus,
        CusPayDate: req.params.CusPayDate,
        ProviderPayStatus: req.params.ProviderPayStatus,
        ProviderPayDate: req.params.ProviderPayDate,
        commission: req.params.commission,
    }

    return validate(setServiceBookingSchema(), attributes);
};

const updateServiceBooking= async (req) => {

    const attributes = {
        id: req.params.id,
        userid: req.params.userid,
        productid: req.params.productid,
        timeslot: req.params.timeslot,
        Status: req.params.Status,
        cancelledOn: req.params.cancelledOn,
        cancelledBy: req.params.cancelledBy,
        CusPayStatus: req.params.CusPayStatus,
        CusPayDate: req.params.CusPayDate,
        ProviderPayStatus: req.params.ProviderPayStatus,
        ProviderPayDate: req.params.ProviderPayDate,
        commission: req.params.commission,
    }

    return validate(updateServiceBookingSchema(), attributes);
};

const deleteServiceBooking = async (req) => {

    const attributes = { id: req.params.id }

    return validate(deleteServiceBookingSchema(), attributes);

};

    module.exports = {
        getAllServiceBookings,
        getServiceBooking,
        setServiceBooking,
        updateServiceBooking,
        deleteServiceBooking
    }